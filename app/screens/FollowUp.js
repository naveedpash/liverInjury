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
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var DataEntry_1 = require("../components/DataEntry");
// styles
var styles_1 = __importDefault(require("./styles"));
var FollowUp = function () {
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.View, { style: styles_1.default.container },
            React.createElement(react_native_1.Text, { style: styles_1.default.heading }, "Follow Up LFTs"),
            React.createElement(react_native_1.Text, { style: styles_1.default.helpText }, "Please enter the laboratory values of the registered patient suspected to have drug induced liver injury")),
        React.createElement(react_native_1.KeyboardAvoidingView, { behavior: "padding" },
            React.createElement(DataEntry_1.DataEntry, { label: "NIC number", helptext: "Enter the National ID Card number of the patient", keyboardType: "numeric" }),
            React.createElement(DataEntry_1.DataEntry, { label: "Bilirubin (mg/dL)", keyboardType: "numeric" }),
            React.createElement(DataEntry_1.DataEntry, { label: "AST (mg/dL)", keyboardType: "numeric" }),
            React.createElement(DataEntry_1.DataEntry, { label: "ALT (mg/dL)", keyboardType: "numeric" }),
            React.createElement(DataEntry_1.DataEntry, { label: "Alkaline Phosphatase (mg/dL)", keyboardType: "numeric" }))));
};
exports.default = FollowUp;
