import * as React from "react";
import { KeyboardAvoidingView, Picker, Text, TextInput, View } from "react-native";
import { DataEntry } from "../components/DataEntry";
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
                    <DataEntry label="NIC number"
                           helptext="Enter the National ID Card number of the patient"
                           keyboardType="numeric" />
                    <DataEntry label="Bilirubin (mg/dL)"
                           keyboardType="numeric" />
                    <DataEntry label="AST (mg/dL)"
                           keyboardType="numeric" />
                    <DataEntry label="ALT (mg/dL)"
                           keyboardType="numeric" />
                    <DataEntry label="Alkaline Phosphatase (mg/dL)"
                           keyboardType="numeric" />
            </KeyboardAvoidingView>
        </View>
    );
};

export default FollowUp;
