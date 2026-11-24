import { useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import GroupContext from "../evp-radio-group/context";
import EvpFormContext from "../evp-form-v2/context";
import { useFormField } from "../evp-form-v2/hooks";

type SelectOption = { label: string; value: any; key: React.Key; disabled?: boolean };
const emptyOptions: SelectOption[] = [];

export type EvpSelectProps = {
  name?: string;
  options?: SelectOption[];
  children?: React.ReactNode;
  value?: any;
  defaultValue?: any;
  onChange?: (value: any, option: SelectOption) => void;
  placeholder?: string;
  label?: string | JSX.Element;
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
  const activeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) activeRef.current?.scrollIntoView?.({ block: "nearest" });
  }, [open, active]);

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
    if (props.value === undefined) setLocalValue(() => option.value);
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
        {props.label && (
          <label htmlFor={id} className="evp input label"
            style={{ fontSize: props.labelSize, width: props.labelWidth, justifyContent: props.labelAlign ?? "left" }}>
            {props.required && <span className="evp-required">*</span>}
            {props.label}{props.labelColon === true ? ":" : props.labelColon}
          </label>
        )}
        <div className="evp evp-select">
          <input id={id} role="combobox" aria-expanded={open} aria-controls={open ? listId : undefined}
            aria-activedescendant={open && options[active] ? listId + "-" + active : undefined}
            aria-label={props.label ? undefined : props.placeholder ?? name}
            placeholder={props.placeholder} className="evp input input-box evp-select-input"
            value={selected?.label ?? ""} readOnly onBlur={() => setOpen(false)}
            onClick={() => open ? setOpen(false) : openMenu()} onKeyDown={handleKeyDown} />
          {open && (
            <div id={listId} role="listbox" className="evp-select-options"
              aria-label={typeof props.label === "string" ? props.label : name}
              onMouseDown={(event) => event.preventDefault()}
              style={{ width: "100%", cursor: "pointer", maxHeight: props.rows ? props.rows * 32 + 8 : undefined }}>
              {options.map((option, index) => (
                <div key={option.key} id={listId + "-" + index} role="option"
                  aria-selected={option === selected} aria-disabled={option.disabled}
                  ref={index === active ? activeRef : undefined}
                  className={["evp-select-option", option === selected && "evp-select-option-selected",
                    index === active && "evp-select-option-active", option.disabled && "evp-disabled"].filter(Boolean).join(" ")}
                  onClick={() => select(option)}>
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <select name={selected ? name : undefined} hidden>
            {selected && <option value={String(selected.value)}>{selected.label}</option>}
          </select>
        </div>
      </EvpRow>
    </EvpCol>
  );
}
