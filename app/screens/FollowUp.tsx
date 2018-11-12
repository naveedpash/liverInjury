import * as React from "react";
import { Button, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { reduxForm } from "redux-form";
// styles
import styles from "./styles";

const FollowUp = (props: any) => {
    const handleSubmit = props;
    const submit = ( values: any ) => console.log(values);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>Follow Up LFTs</Text>
                <Text style={styles.helpText}>Please enter the laboratory values of the registered patient suspected to
                 have drug induced liver injury</Text>
            </View>
            {/* TODO: implement fuzzy search */}
            <KeyboardAvoidingView behavior="padding">
                <View>
                    <View style={styles.wrapper}>
                        <Text>NIC Number</Text>
                        <TextInput keyboardType="numeric" />
                    </View>
                    <Text style={styles.helpText}>
                        Enter the National ID Card Number of the Patient
                    </Text>
                </View>
                <View style={styles.wrapper}>
                    <Text>Bilirubin (U/L)</Text>
                    <TextInput keyboardType="numeric" />
                </View>
                <View style={styles.wrapper}>
                    <Text>AST (U/L)</Text>
                    <TextInput keyboardType="numeric" />
                </View>
                <View style={styles.wrapper}>
                    <Text>ALT (U/L)</Text>
                    <TextInput keyboardType="numeric" />
                </View>
                <View style={styles.wrapper}>
                    <Text>Alkaline Phosphatase (U/L)</Text>
                    <TextInput keyboardType="numeric" />
                </View>
                <View style={styles.wrapper}>
                    <Text>INR</Text>
                    <TextInput keyboardType="numeric" />
                </View>
                <Button title="Submit" onPress={handleSubmit(submit)} color="black" />
            </KeyboardAvoidingView>
        </View>
    );
};

export default reduxForm({
    form: "FollowUp"
})(FollowUp);
