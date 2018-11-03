import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
import DateEntry from "../components/DateEntry";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Implement Accordion on each section; Green tick vs Red cross to indicate remaining fields
// TODO: Add border between each entry element
const Entry = () => {
    return (
        <View style={styles.container}>
            {/* DILI Episode */}
            <View>
            {/* TODO: implement RxNorm coding system */}
                <DataEntry
                    label="Drug"
                    helptext="Drug suspected to have caused drug induced liver injury"
                />
                <View>
                    <View styles={styles.wrapper}>
                        <Text style={styles.label}>
                            Drug Dose
                        </Text>
                        <TextInput />
                    </View>
                    <Text styles={styles.label}>
                        Dose at which suspected drug was taken by the patient
                    </Text>
                </View>
                <DataEntry
                    label="Drug Dose"
                    helptext="Dose at which suspected drug was taken by the patient"
                />
                <View>
                    <Text>Drug Dose Unit</Text>
                    <Text>Unit of Dose of Suspected Drug</Text>
                    <Picker>
                        <Picker.Item label="Milligrams" value="mg" />
                        <Picker.Item label="Grams" value="g" />
                        <Picker.Item label="Milliliters" value="mL" />
                        <Picker.Item label="Micrograms" value="mcg" />
                    </Picker>
                </View>
                <View>
                    <Text style={styles.label}>Indication</Text>
                    <TextInput multiline={true} />
                    <Text style={styles.helpText}>Indication for which suspected drug was originally prescribed</Text>
                </View>
                <DataEntry
                    label="Re-Challenged?"
                    helptext="Was the patient re-challenged with the drug suspected to have caused liver injury>"
                    picker={true}
                />
                <View>
                    <Text style={styles.label}>Result of Re-Challenge</Text>
                    <TextInput multiline={true} />
                    <Text style={styles.helpText}>What was the result of the Re-challenge?</Text>
                </View>
            </View>
        </View>
    );
};
