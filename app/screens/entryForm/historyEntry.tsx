import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

const validDate: string = "2018-12-31";
const validDateMessage: string = "Date of onset of symptoms cannot be before 2019-01-01";

export interface IHistoryScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class HistoryEntry extends React.Component<IHistoryScreenProps, object> {
    public render() {
    {/* Patient History */ }
    return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Onset</Text>
                        <DateEntry 
                            validateAgainst={validDate}
                            validationMessage={validDateMessage}
                        />
                    </View>
                    <Text style={styles.helpText}>Date of Onset of Symptoms</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Nausea</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complaining of nausea on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Vomiting</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of vomiting on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Anorexia</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of anorexia on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Abdominal Pain</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of abdominal pain on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Dark Urine</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of dark urine on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Pruritis</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of pruritis on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Rash</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of rash on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Fever</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complaining of fever (> 38C) on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Icteric</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complaining of jaundice on initial presentation?</Text>
                </ScrollView>
            </View>
        );
    }
}
