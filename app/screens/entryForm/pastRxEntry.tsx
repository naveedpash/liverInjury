import * as React from "react";
import { Button, Picker, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

export interface IPastRxScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class PastRxEntry extends React.Component<IPastRxScreenProps, object> {
    public render() {
    {/* Past Drug History */}
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Past Reaction to Suspected Drug</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>
                    Has the patient previously taken the drug
                    suspected to have caused the current episode of liver injury?
                </Text>
            </View>
            <View>
                <Text style={styles.label}>
                    What medications has the patient been taking over the past 3 months?
                </Text>
                <Text>Please type the drug, its dose and dosage unit and duration the patient
                 has been taking the drug
                </Text>
                {/* Button to add more row */}
                <TextInput multiline={true} />
            </View>
            <Button onPress={() => this.props.navigation.navigate("exam")}
                    color="black"
                    title="Next" />
        </View>
    );
    }
}
