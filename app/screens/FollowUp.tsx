import * as React from "react";
import { KeyboardAvoidingView, Picker, Text, TextInput, View } from "react-native";
import { TextEntry } from "../components/TextEntry";
// styles
import styles from "./styles";

const FollowUp = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>Follow Up LFTs</Text>
                <Text style={styles.helpText}>Please enter the laboratory values of the registered patient suspected to
                 have drug induced liver injury</Text>
            </View>
            {/* TODO: implement fuzzy search */}
                <KeyboardAvoidingView behavior="padding">
                    <TextEntry label="NIC number"
                           helptext="Enter the National ID Card number of the patient"
                           keyboardType="numeric" />
                    <TextEntry label="Bilirubin (mg/dL)"
                           keyboardType="numeric" />
                    <TextEntry label="AST (mg/dL)"
                           keyboardType="numeric" />
                    <TextEntry label="ALT (mg/dL)"
                           keyboardType="numeric" />
                    <TextEntry label="Alkaline Phosphatase (mg/dL)"
                           keyboardType="numeric" />
            </KeyboardAvoidingView>
        </View>
    );
};

export default FollowUp;
