import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
import { DateEntry } from "../components/DateEntry";
// styles
import styles from "./styles";

const labHxEntry = () => {
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
        </View>
    );
};

export default labHxEntry;
