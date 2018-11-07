import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
// styles
import styles from "./styles";

export interface IMortalityScreenProp {
    navigation: NavigationScreenProp<any, any>;
}

export default class Mortality extends React.Component<IMortalityScreenProp, object> {
    public render() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>Mortality</Text>
                <Text style={styles.helpText}>
                    Please enter the National ID Card number of the patient suspected to have deceased
                    from drug induced liver injury
                </Text>
            </View>
            {/* TODO: implement fuzzy search */}
            <View>
                <Text>NIC Number</Text>
                <TextInput keyboardType="numeric" />
            </View>
            <Button onPress={() => console.log("Save")}
                    color="Black"
                    title="Save" />
        </View>
    );
    }
}
