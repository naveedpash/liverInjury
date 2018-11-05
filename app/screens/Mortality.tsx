import * as React from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
// styles
import styles from "./styles";

const Mortality = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>Mortality</Text>
                <Text style={styles.helpText}>Please enter the National ID Card number of the patient suspected to have deceased
                 from drug induced liver injury</Text>
            </View>
            {/* TODO: implement fuzzy search */}
            <KeyboardAvoidingView behavior="padding">
                <View>
                    <Text>NIC Number</Text>
                    <TextInput keyboardType="numeric" />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Mortality;
