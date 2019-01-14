import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
// styles
import styles from "./styles";

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
                        <Text style={styles.label}>Jaundice</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complaining of jaundice on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Abdominal Pain</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of abdominal pain on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Pruritis</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of pruritis on initial presentation?</Text>
                </ScrollView>
            </View>
        );
    }
}
