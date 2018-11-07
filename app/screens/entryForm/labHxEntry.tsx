import * as React from "react";
import { Button, Picker, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

export interface ILabHxScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class LabHxEntry extends React.Component<ILabHxScreenProps, object> {
    public render() {
    {/* Prior Lab Tests */}
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.helpText}>
                    Please enter any of the following laboratory reports that are available from prior to the
                    current episode of suspected drug induced liver injury
                    </Text>
                </View>
                <View style={styles.wrapper}>
                    <Text>AST</Text>
                    <TextInput />
                    <DateEntry />
                </View>
                <View style={styles.wrapper}>
                    <Text>ALT</Text>
                    <TextInput />
                    <DateEntry />
                </View>
                <View style={styles.wrapper}>
                    <Text>Alkaline\nPhosphatase</Text>
                    <TextInput />
                    <DateEntry />
                </View>
                <View style={styles.wrapper}>
                    <Text>INR</Text>
                    <TextInput />
                    <DateEntry />
                </View>
            </View>
            <Button onPress={() => console.log("save")}
                    title="Save"
                    color="black" />
        </View>
    );
    }
}
