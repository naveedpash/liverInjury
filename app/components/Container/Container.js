"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
// styles
var styles_1 = __importDefault(require("./styles"));
var Container = function (_a) {
    var children = _a.children;
    return (React.createElement(react_native_1.View, { style: styles_1.default.container }, children));
};
Container.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};
exports.default = Container;
