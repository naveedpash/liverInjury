import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Add border between each entry element
export interface IDiliScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class DiliEntry extends React.Component<IDiliScreenProps, object> {
    public render() {
        return (
            <View style={styles.container}>
                {/* DILI Episode */}
                {/* TODO: implement RxNorm coding system */}
                <ScrollView>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Drug Name</Text>
                            <TextInput style={styles.inputText}/>
                        </View>
                        <Text style={styles.helpText}>Drug suspected to have caused drug induced liver injury</Text>
                    </View>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Drug Dose</Text>
                            <TextInput style={styles.inputForm} />
                            <Picker style={styles.picker}>
                                <Picker.Item label="Milligrams" value="mg" />
                                <Picker.Item label="Grams" value="g" />
                                <Picker.Item label="Milliliters" value="mL" />
                                <Picker.Item label="Micrograms" value="mcg" />
                            </Picker>
                        </View>
                        <Text style={styles.helpText}>Dose at which suspected drug was taken by the patient</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Indication</Text>
                        <TextInput style={styles.inputText} multiline={true} />
                        <Text style={styles.helpText}>Indication for which suspected drug was originally prescribed</Text>
                    </View>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Re-challenged?</Text>
                            <Picker style={styles.picker}>
                                <Picker.Item label="No" value={0} />
                                <Picker.Item label="Yes" value={1} />
                            </Picker>
                        </View>
                        <Text style={styles.helpText}>
                            Was the patient re-challenged with the drug suspected to have caused liver injury
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Result of Re-Challenge</Text>
                        <TextInput style={styles.inputText} multiline={true} />
                        <Text style={styles.helpText}>What was the result of the Re-challenge?</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
