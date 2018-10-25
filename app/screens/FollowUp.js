"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
//styles
//import styles from './styles';
var FollowUp = function () {
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "Follow Up LFTs"),
            React.createElement(react_native_1.Text, null, "Please enter the laboratory values of the registered patient suspected to have drug induced liver injury")),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "Unique ID"),
            React.createElement(react_native_1.Text, null, "Please enter the unique ID the patient was given at the time of registration"),
            React.createElement(react_native_1.TextInput, null)),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "Bilirubin (mg/dL)"),
            React.createElement(react_native_1.TextInput, null)),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "AST (mg/dL)"),
            React.createElement(react_native_1.TextInput, null)),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "ALT (mg/dL)"),
            React.createElement(react_native_1.TextInput, null)),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "Alkaline Phosphatase (mg/dL)"),
            React.createElement(react_native_1.TextInput, null))));
};
exports.default = FollowUp;
