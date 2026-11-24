'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../evp-col/index.js');
var index$1 = require('../evp-row/index.js');
var context = require('../evp-radio-group/context.js');
var context$1 = require('../evp-form-v2/context.js');
var hooks = require('../evp-form-v2/hooks.js');

var emptyOptions = [];
var optionHeight = 32;
var listPadding = 8;
var defaultVisibleRows = 8;
var overscan = 3;
var windowThreshold = 100;
function SelectOptions(_a) {
    var id = _a.id, label = _a.label, labelledBy = _a.labelledBy, rows = _a.rows, options = _a.options, active = _a.active, selected = _a.selected, onSelect = _a.onSelect;
    var listRef = React.useRef(null);
    var activeRef = React.useRef(null);
    var virtual = options.length > windowThreshold;
    var requestedRows = rows !== undefined && Number.isFinite(rows) && rows > 0 ? rows : undefined;
    var _b = React.useState(Math.min(Math.ceil(requestedRows !== null && requestedRows !== void 0 ? requestedRows : defaultVisibleRows), defaultVisibleRows)), visibleRows = _b[0], setVisibleRows = _b[1];
    var _c = React.useState(0), scrollRow = _c[0], setScrollRow = _c[1];
    React.useLayoutEffect(function () {
        var list = listRef.current;
        if (!virtual || !list)
            return;
        var measure = function () {
            var height = list.clientHeight - listPadding;
            if (height > 0)
                setVisibleRows(Math.ceil(height / optionHeight));
        };
        measure();
        if (typeof ResizeObserver === "undefined")
            return;
        var observer = new ResizeObserver(measure);
        observer.observe(list);
        return function () { return observer.disconnect(); };
    }, [virtual, requestedRows]);
    React.useLayoutEffect(function () {
        var _a, _b;
        var list = listRef.current;
        if (!list || active < 0 || active >= options.length)
            return;
        if (!virtual) {
            (_b = (_a = activeRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView) === null || _b === void 0 ? void 0 : _b.call(_a, { block: "nearest" });
            return;
        }
        var height = list.clientHeight ? list.clientHeight - listPadding : visibleRows * optionHeight;
        var top = active * optionHeight;
        if (top < list.scrollTop)
            list.scrollTop = top;
        else if (top + optionHeight > list.scrollTop + height)
            list.scrollTop = top + optionHeight - height;
        setScrollRow(Math.floor(list.scrollTop / optionHeight));
    }, [active, virtual, options.length, visibleRows]);
    function renderOption(option, index) {
        return (jsxRuntime.jsx("div", tslib.__assign({ id: id + "-" + index, role: "option", "aria-selected": option === selected, "aria-disabled": option.disabled, "aria-posinset": virtual ? index + 1 : undefined, "aria-setsize": virtual ? options.length : undefined, ref: index === active ? activeRef : undefined, className: ["evp-select-option", option === selected && "evp-select-option-selected",
                index === active && "evp-select-option-active", option.disabled && "evp-disabled"].filter(Boolean).join(" "), style: virtual ? { top: index * optionHeight, height: optionHeight } : undefined, onClick: function () { return onSelect(option); } }, { children: option.label }), option.key));
    }
    function visibleOptions() {
        var row = Math.max(0, Math.min(scrollRow, options.length - visibleRows));
        var first = Math.max(0, row - overscan);
        var end = Math.min(options.length, row + visibleRows + overscan + 1);
        // Keep the active descendant mounted when a pointer scrolls away from it.
        var indices = Array.from({ length: end - first }, function (_, i) { return first + i; });
        if (active >= 0 && active < first)
            indices.unshift(active);
        if (active >= end && active < options.length)
            indices.push(active);
        return indices.map(function (index) { return renderOption(options[index], index); });
    }
    var menuHeight = (requestedRows !== null && requestedRows !== void 0 ? requestedRows : defaultVisibleRows) * optionHeight + listPadding;
    return (jsxRuntime.jsx("div", tslib.__assign({ id: id, role: "listbox", ref: listRef, className: "evp-select-options", "aria-label": label, "aria-labelledby": labelledBy, onMouseDown: function (event) { return event.preventDefault(); }, onScroll: virtual ? function (event) { return setScrollRow(Math.floor(event.currentTarget.scrollTop / optionHeight)); } : undefined, style: { width: "100%", cursor: "pointer",
            maxHeight: virtual ? "min(".concat(menuHeight, "px, 60vh)") : requestedRows ? menuHeight : undefined } }, { children: virtual ? (jsxRuntime.jsx("div", tslib.__assign({ role: "presentation", className: "evp-select-window", style: { height: options.length * optionHeight } }, { children: visibleOptions() }))) : options.map(renderOption) })));
}
function EvpSelect(props) {
    var _a, _b, _c, _d, _e, _f;
    var group = React.useContext(context["default"]);
    var form = React.useContext(context$1["default"]);
    var name = (_a = props.name) !== null && _a !== void 0 ? _a : group.name;
    var options = (_b = props.options) !== null && _b !== void 0 ? _b : emptyOptions;
    var _g = React.useState(function () { return props.defaultValue; }), localValue = _g[0], setLocalValue = _g[1];
    var value = props.value !== undefined ? props.value : localValue;
    var selected = React.useMemo(function () { return options.find(function (option) { return Object.is(option.value, value); }); }, [options, value]);
    hooks.useFormField(form, name, selected === null || selected === void 0 ? void 0 : selected.value);
    var _h = React.useState(false), open = _h[0], setOpen = _h[1];
    var _j = React.useState(-1), active = _j[0], setActive = _j[1];
    var id = React.useId();
    var listId = id + "-options";
    var hasLabel = props.label != null && typeof props.label !== "boolean" && props.label !== "";
    var labelId = hasLabel ? id + "-label" : undefined;
    function nextEnabled(start, direction) {
        for (var step = 1; step <= options.length; step++) {
            var index = ((start + direction * step) % options.length + options.length) % options.length;
            if (!options[index].disabled)
                return index;
        }
        return -1;
    }
    function openMenu(direction) {
        if (direction === void 0) { direction = 1; }
        setActive(selected && !selected.disabled ? options.indexOf(selected) : nextEnabled(direction > 0 ? -1 : 0, direction));
        setOpen(true);
    }
    function select(option) {
        var _a;
        if (!option || option.disabled)
            return;
        if (props.value === undefined) {
            setLocalValue(function () { return option.value; });
            if (form && name)
                form.set(name, option.value);
        }
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, option.value, option);
        setOpen(false);
    }
    function handleKeyDown(event) {
        switch (event.key) {
            case "ArrowDown":
            case "ArrowUp": {
                var direction = event.key === "ArrowDown" ? 1 : -1;
                event.preventDefault();
                if (open)
                    setActive(nextEnabled(active, direction));
                else
                    openMenu(direction);
                break;
            }
            case "Home":
            case "End":
                if (!open)
                    break;
                event.preventDefault();
                setActive(event.key === "Home" ? nextEnabled(-1, 1) : nextEnabled(0, -1));
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                if (open)
                    select(options[active]);
                else
                    openMenu();
                break;
            case "Escape":
                if (open) {
                    event.preventDefault();
                    setOpen(false);
                }
                break;
        }
    }
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ mg: [4, 0, 4, 0], alignItems: "flex-start" }, { children: jsxRuntime.jsxs(index$1["default"], { children: [hasLabel && (jsxRuntime.jsxs("label", tslib.__assign({ id: labelId, htmlFor: id, className: "evp input label", style: { fontSize: props.labelSize, width: props.labelWidth, justifyContent: (_c = props.labelAlign) !== null && _c !== void 0 ? _c : "left" } }, { children: [props.required && jsxRuntime.jsx("span", tslib.__assign({ className: "evp-required" }, { children: "*" })), props.label, props.labelColon === true ? ":" : props.labelColon] }))), jsxRuntime.jsxs("div", tslib.__assign({ className: "evp evp-select" }, { children: [jsxRuntime.jsx("input", { id: id, role: "combobox", "aria-expanded": open, "aria-controls": open ? listId : undefined, "aria-activedescendant": open && options[active] ? listId + "-" + active : undefined, "aria-label": hasLabel ? undefined : (_d = props.placeholder) !== null && _d !== void 0 ? _d : name, placeholder: props.placeholder, className: "evp input input-box evp-select-input", value: (_e = selected === null || selected === void 0 ? void 0 : selected.label) !== null && _e !== void 0 ? _e : "", readOnly: true, onBlur: function () { return setOpen(false); }, onClick: function () { return open ? setOpen(false) : openMenu(); }, onKeyDown: handleKeyDown }), open && (jsxRuntime.jsx(SelectOptions, { id: listId, labelledBy: labelId, label: hasLabel ? undefined : (_f = props.placeholder) !== null && _f !== void 0 ? _f : name, rows: props.rows, options: options, active: active, selected: selected, onSelect: select })), jsxRuntime.jsx("select", tslib.__assign({ name: selected ? name : undefined, hidden: true }, { children: selected && jsxRuntime.jsx("option", tslib.__assign({ value: String(selected.value) }, { children: selected.label })) }))] }))] }) })));
}

exports["default"] = EvpSelect;
