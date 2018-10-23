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
// TODO: Implement Accordion on each section; Green tick vs Red cross to indicate remaining fields
var Entry = function () {
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Unique ID"),
                React.createElement(react_native_1.Text, null, "Unique ID for Registering the Patient"),
                React.createElement(react_native_1.TextInput, null)),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Name"),
                React.createElement(react_native_1.Text, null, "Name Patient"),
                React.createElement(react_native_1.TextInput, null)),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Age"),
                React.createElement(react_native_1.Text, null, "Age of Patient at the time of Registration"),
                React.createElement(react_native_1.TextInput, null)),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Gender"),
                React.createElement(react_native_1.Text, null, "Gender of Patient"),
                React.createElement(react_native_1.Picker, null,
                    React.createElement(react_native_1.Picker.Item, { label: "Male", value: 0 }),
                    React.createElement(react_native_1.Picker.Item, { label: "female", value: 1 }))),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Consent"),
                React.createElement(react_native_1.Text, null, "Has the patient given consent to be registered?"),
                React.createElement(react_native_1.Picker, null,
                    React.createElement(react_native_1.Picker.Item, { label: "No", value: 0 }),
                    React.createElement(react_native_1.Picker.Item, { label: "Yes", value: 1 }))),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Entrant"),
                React.createElement(react_native_1.Text, null, "Name of Physician Registering Patient"),
                React.createElement(react_native_1.TextInput, null)),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Entry Date"),
                React.createElement(react_native_1.Text, null, "Date of Registering Patient"))),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Drug"),
                React.createElement(react_native_1.Text, null, "Drug Suspected to have Caused DILI"),
                React.createElement(react_native_1.TextInput, null)),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Drug Dose"),
                React.createElement(react_native_1.Text, null, "Dose at which Suspected Drug was taken by the patient"),
                React.createElement(react_native_1.TextInput, null)),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Drug Dose Unit"),
                React.createElement(react_native_1.Text, null, "Unit of Dose of Suspected Drug"),
                React.createElement(react_native_1.Picker, null,
                    React.createElement(react_native_1.Picker.Item, { label: "Milligrams", value: "mg" }),
                    React.createElement(react_native_1.Picker.Item, { label: "Grams", value: "g" }),
                    React.createElement(react_native_1.Picker.Item, { label: "Milliliters", value: "mL" }),
                    React.createElement(react_native_1.Picker.Item, { label: "Micrograms", value: "mcg" }))),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Indication"),
                React.createElement(react_native_1.Text, null, "Indication for which suspected drug was originally prescribed"),
                React.createElement(react_native_1.TextInput, { multiline: true })),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Re-Challenged?"),
                React.createElement(react_native_1.Text, null, "Was the patient re-challenged with the drug suspected to have caused liver injury?"),
                React.createElement(react_native_1.Picker, null,
                    React.createElement(react_native_1.Picker.Item, { label: "No", value: 0 }),
                    React.createElement(react_native_1.Picker.Item, { label: "Yes", value: 1 }))),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "Result of Re-Challenge"),
                React.createElement(react_native_1.Text, null, "What was the result of the Re-challenge?"),
                React.createElement(react_native_1.TextInput, { multiline: true })))));
};
exports.default = Entry;
