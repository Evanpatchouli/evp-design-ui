'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var context = require('./context.js');

var MenuCtxInstance = /** @class */ (function () {
    function MenuCtxInstance(options) {
        var _this = this;
        this.openKeys = [];
        this.setOpenKeys = function (keys, type) {
            var _a, _b;
            _this.openKeys = keys;
            switch (type) {
                case "open":
                    (_a = _this.onOpen) === null || _a === void 0 ? void 0 : _a.call(_this, keys);
                    break;
                case "close":
                    (_b = _this.onClose) === null || _b === void 0 ? void 0 : _b.call(_this, keys);
                    break;
            }
        };
        this.multiOpened = false;
        this.setMultiSelected = function (multiSelected) {
            _this.multiSelected = multiSelected;
        };
        this.selectedKeys = [];
        this.setSelectedKeys = function (keys, type) {
            var _a, _b;
            if (keys === void 0) { keys = []; }
            // console.log("Going to set");
            // console.log("keys", keys);
            var previous = new Set(_this.selectedKeys);
            var next = new Set(keys);
            _this.selectedKeys = tslib.__spreadArray([], keys, true);
            switch (type) {
                case "select":
                    (_a = _this.onSelect) === null || _a === void 0 ? void 0 : _a.call(_this, tslib.__spreadArray([], keys, true));
                    break;
                case "unselect":
                    (_b = _this.onUnselect) === null || _b === void 0 ? void 0 : _b.call(_this, tslib.__spreadArray([], keys, true));
                    break;
            }
            previous.forEach(function (key) {
                var _a, _b;
                if (!next.has(key))
                    (_b = (_a = _this._setSelectedMap) === null || _a === void 0 ? void 0 : _a.get(key)) === null || _b === void 0 ? void 0 : _b(false);
            });
            next.forEach(function (key) {
                var _a, _b;
                if (!previous.has(key))
                    (_b = (_a = _this._setSelectedMap) === null || _a === void 0 ? void 0 : _a.get(key)) === null || _b === void 0 ? void 0 : _b(true);
            });
        };
        this._setSelectedMap = new Map();
        this._add_setSelectedMap = function (key, fc) {
            var _a, _b, _c;
            (_a = _this._setSelectedMap) === null || _a === void 0 ? void 0 : _a.set(key, fc);
            fc((_c = (_b = _this.selectedKeys) === null || _b === void 0 ? void 0 : _b.includes(key)) !== null && _c !== void 0 ? _c : false);
            return function () {
                var _a;
                if (((_a = _this._setSelectedMap) === null || _a === void 0 ? void 0 : _a.get(key)) === fc)
                    _this._setSelectedMap.delete(key);
            };
        };
        this._handleOpenOne = function (key) {
            var _a, _b;
            if (_this.multiOpened) {
                (_a = _this.setOpenKeys) === null || _a === void 0 ? void 0 : _a.call(_this, [key], "open");
            }
            else {
                (_b = _this.setOpenKeys) === null || _b === void 0 ? void 0 : _b.call(_this, [key], "open");
            }
        };
        this._handleCloseOne = function (key) {
            var _a, _b;
            (_a = _this.setOpenKeys) === null || _a === void 0 ? void 0 : _a.call(_this, ((_b = _this.openKeys) !== null && _b !== void 0 ? _b : []).filter(function (k) { return key !== k; }), "close");
        };
        this.selectOne = function (key) {
            _this._handleSelectOne(key);
        };
        this.unselectOne = function (key) {
            _this._handleSelectOne(key);
        };
        this.openOne = function (key) {
            _this._handleOpenOne(key);
        };
        this.closeOne = function (key) {
            _this._handleCloseOne(key);
        };
        this.selectMany = function (key) {
            var _a;
            (_a = _this.setSelectedKeys) === null || _a === void 0 ? void 0 : _a.call(_this, tslib.__spreadArray([], key, true), "select");
        };
        this._handleToggleOne = function (key) {
            var _a;
            if ((_a = _this.openKeys) === null || _a === void 0 ? void 0 : _a.includes(key)) {
                _this._handleCloseOne(key);
            }
            else {
                _this._handleOpenOne(key);
            }
        };
        this._handleSelectOne = function (key) {
            var _a;
            (_a = _this.setSelectedKeys) === null || _a === void 0 ? void 0 : _a.call(_this, [key], "select");
            // if (!this.multiSelected) {
            //   (this._setSelectedMap ?? new Map()).forEach((setThisSelected, k) => {
            //     if (k !== key) {
            //       setThisSelected(false);
            //     }
            //   });
            // } else {
            //   this.setSelectedKeys?.([key], "select");
            // }
        };
        this._handleUnselectOne = function (key) {
            var _a, _b;
            (_a = _this.setSelectedKeys) === null || _a === void 0 ? void 0 : _a.call(_this, ((_b = _this.selectedKeys) !== null && _b !== void 0 ? _b : []).filter(function (k) { return key !== k; }), "unselect");
        };
        this.multiSelected = options.multiSelected;
        this.multiOpened = options.multiOpened;
        this.onOpen = options.onOpen;
        this.onClose = options.onClose;
        this.onSelect = options.onSelect;
        this.onUnselect = options.onUnselect;
    }
    return MenuCtxInstance;
}());
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function useCreateDispatchedMenuCtx(multiSelected: boolean = false) {
//   const [openKeys, setOpenKeys] = useState<string[]>([]);
//   const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
//   return {
//     multiSelected,
//     openKeys,
//     setOpenKeys,
//     selectedKeys,
//     setSelectedKeys,
//   } as any;
// }
function useMenuRef(options) {
    if (options === void 0) { options = {
        multiSelected: false,
        multiOpened: false,
    }; }
    var ctx = useMenu(options);
    var menuRef = React.useRef();
    if (!menuRef.current) {
        menuRef.current = ctx;
    }
    return menuRef;
}
function useMenu(options) {
    if (options === void 0) { options = {
        multiSelected: false,
        multiOpened: false,
    }; }
    var parent = React.useContext(context["default"]);
    var local = React.useRef();
    if (parent)
        return parent;
    if (!local.current)
        local.current = new MenuCtxInstance(options);
    return local.current;
}
// export default function useMenu(multiSelected: boolean = false) {
//   const newCtx = useCreateDispatchedMenuCtx(multiSelected);
//   return useContext(MenuContext) ?? newCtx;
// }

exports.MenuCtxInstance = MenuCtxInstance;
exports["default"] = useMenu;
exports.useMenuRef = useMenuRef;
