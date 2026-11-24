import { useContext, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import GroupContext from "../evp-radio-group/context";
import EvpFormContext from "../evp-form-v2/context";
import { useFormField } from "../evp-form-v2/hooks";

type SelectOption = { label: string; value: any; key: React.Key; disabled?: boolean };
const emptyOptions: SelectOption[] = [];
const optionHeight = 32;
const listPadding = 8;
const defaultVisibleRows = 8;
const overscan = 3;
const windowThreshold = 100;

function SelectOptions({ id, label, labelledBy, rows, options, active, selected, onSelect }: {
  id: string;
  label?: string;
  labelledBy?: string;
  rows?: number;
  options: SelectOption[];
  active: number;
  selected?: SelectOption;
  onSelect: (option: SelectOption) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const virtual = options.length > windowThreshold;
  const requestedRows = rows !== undefined && Number.isFinite(rows) && rows > 0 ? rows : undefined;
  const [visibleRows, setVisibleRows] = useState(Math.min(Math.ceil(requestedRows ?? defaultVisibleRows), defaultVisibleRows));
  const [scrollRow, setScrollRow] = useState(0);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!virtual || !list) return;
    const measure = () => {
      const height = list.clientHeight - listPadding;
      if (height > 0) setVisibleRows(Math.ceil(height / optionHeight));
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [virtual, requestedRows]);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || active < 0 || active >= options.length) return;
    if (!virtual) {
      activeRef.current?.scrollIntoView?.({ block: "nearest" });
      return;
    }
    const height = list.clientHeight ? list.clientHeight - listPadding : visibleRows * optionHeight;
    const top = active * optionHeight;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (top + optionHeight > list.scrollTop + height) list.scrollTop = top + optionHeight - height;
    setScrollRow(Math.floor(list.scrollTop / optionHeight));
  }, [active, virtual, options.length, visibleRows]);

  function renderOption(option: SelectOption, index: number) {
    return (
      <div key={option.key} id={id + "-" + index} role="option"
        aria-selected={option === selected} aria-disabled={option.disabled}
        aria-posinset={virtual ? index + 1 : undefined} aria-setsize={virtual ? options.length : undefined}
        ref={index === active ? activeRef : undefined}
        className={["evp-select-option", option === selected && "evp-select-option-selected",
          index === active && "evp-select-option-active", option.disabled && "evp-disabled"].filter(Boolean).join(" ")}
        style={virtual ? { top: index * optionHeight, height: optionHeight } : undefined}
        onClick={() => onSelect(option)}>
        {option.label}
      </div>
    );
  }

  function visibleOptions() {
    const row = Math.max(0, Math.min(scrollRow, options.length - visibleRows));
    const first = Math.max(0, row - overscan);
    const end = Math.min(options.length, row + visibleRows + overscan + 1);
    // Keep the active descendant mounted when a pointer scrolls away from it.
    const indices = Array.from({ length: end - first }, (_, i) => first + i);
    if (active >= 0 && active < first) indices.unshift(active);
    if (active >= end && active < options.length) indices.push(active);
    return indices.map((index) => renderOption(options[index], index));
  }

  const menuHeight = (requestedRows ?? defaultVisibleRows) * optionHeight + listPadding;
  return (
    <div id={id} role="listbox" ref={listRef} className="evp-select-options" aria-label={label} aria-labelledby={labelledBy}
      onMouseDown={(event) => event.preventDefault()}
      onScroll={virtual ? (event) => setScrollRow(Math.floor(event.currentTarget.scrollTop / optionHeight)) : undefined}
      style={{ width: "100%", cursor: "pointer",
        maxHeight: virtual ? `min(${menuHeight}px, 60vh)` : requestedRows ? menuHeight : undefined }}>
      {virtual ? (
        <div role="presentation" className="evp-select-window" style={{ height: options.length * optionHeight }}>
          {visibleOptions()}
        </div>
      ) : options.map(renderOption)}
    </div>
  );
}

export type EvpSelectProps = {
  name?: string;
  options?: SelectOption[];
  children?: React.ReactNode;
  value?: any;
  defaultValue?: any;
  onChange?: (value: any, option: SelectOption) => void;
  placeholder?: string;
  label?: React.ReactNode;
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  labelColon?: boolean | React.ReactNode;
  required?: boolean;
  rows?: number;
};

export default function EvpSelect(props: EvpSelectProps) {
  const group = useContext(GroupContext);
  const form = useContext(EvpFormContext);
  const name = props.name ?? group.name;
  const options = props.options ?? emptyOptions;
  const [localValue, setLocalValue] = useState(() => props.defaultValue);
  const value = props.value !== undefined ? props.value : localValue;
  const selected = useMemo(() => options.find((option) => Object.is(option.value, value)), [options, value]);
  useFormField(form, name, selected?.value);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const id = useId();
  const listId = id + "-options";
  const hasLabel = props.label != null && typeof props.label !== "boolean" && props.label !== "";
  const labelId = hasLabel ? id + "-label" : undefined;


  function nextEnabled(start: number, direction: number) {
    for (let step = 1; step <= options.length; step++) {
      const index = ((start + direction * step) % options.length + options.length) % options.length;
      if (!options[index].disabled) return index;
    }
    return -1;
  }

  function openMenu(direction = 1) {
    setActive(selected && !selected.disabled ? options.indexOf(selected) : nextEnabled(direction > 0 ? -1 : 0, direction));
    setOpen(true);
  }

  function select(option?: SelectOption) {
    if (!option || option.disabled) return;
    if (props.value === undefined) {
      setLocalValue(() => option.value);
      if (form && name) form.set(name, option.value);
    }
    props.onChange?.(option.value, option);
    setOpen(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        const direction = event.key === "ArrowDown" ? 1 : -1;
        event.preventDefault();
        if (open) setActive(nextEnabled(active, direction));
        else openMenu(direction);
        break;
      }
      case "Home":
      case "End":
        if (!open) break;
        event.preventDefault();
        setActive(event.key === "Home" ? nextEnabled(-1, 1) : nextEnabled(0, -1));
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) select(options[active]);
        else openMenu();
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
    }
  }

  return (
    <EvpCol mg={[4, 0, 4, 0]} alignItems="flex-start">
      <EvpRow>
        {hasLabel && (
          <label id={labelId} htmlFor={id} className="evp input label"
            style={{ fontSize: props.labelSize, width: props.labelWidth, justifyContent: props.labelAlign ?? "left" }}>
            {props.required && <span className="evp-required">*</span>}
            {props.label}{props.labelColon === true ? ":" : props.labelColon}
          </label>
        )}
        <div className="evp evp-select">
          <input id={id} role="combobox" aria-expanded={open} aria-controls={open ? listId : undefined}
            aria-activedescendant={open && options[active] ? listId + "-" + active : undefined}
            aria-label={hasLabel ? undefined : props.placeholder ?? name}
            placeholder={props.placeholder} className="evp input input-box evp-select-input"
            value={selected?.label ?? ""} readOnly onBlur={() => setOpen(false)}
            onClick={() => open ? setOpen(false) : openMenu()} onKeyDown={handleKeyDown} />
          {open && (
            <SelectOptions id={listId} labelledBy={labelId} label={hasLabel ? undefined : props.placeholder ?? name} rows={props.rows}
              options={options} active={active} selected={selected} onSelect={select} />
          )}
          <select name={selected ? name : undefined} hidden>
            {selected && <option value={String(selected.value)}>{selected.label}</option>}
          </select>
        </div>
      </EvpRow>
    </EvpCol>
  );
}
