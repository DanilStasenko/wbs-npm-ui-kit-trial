"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./MyInput.css");
const MyInput = (_a) => {
    var { big, placeholder, label } = _a, props = __rest(_a, ["big", "placeholder", "label"]);
    const rootClasses = ['my-input'];
    if (big) {
        rootClasses.push('big-input');
    }
    return (react_1.default.createElement("label", null,
        label,
        react_1.default.createElement("input", Object.assign({ className: rootClasses.join(' '), placeholder: placeholder }, props))));
};
exports.default = MyInput;
//# sourceMappingURL=MyInput.js.map