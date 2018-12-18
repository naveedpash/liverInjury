import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

export interface IPastScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class PastEntry extends React.Component<IPastScreenProps, object> {
    public render() {
    {/* Past Medical History */}
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Heart Failure</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>
                    Is the patient known to have heart failure?
                </Text>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>TPN</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>
                    Is the patient known to have received total parenteral nutrition within the past 3 months?
                </Text>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Hepatitis B</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>
                    Is the patient known to have active hepatitis B at the time of presentation?
                </Text>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Hepatitis C</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>
                    Is the patient known to have active hepatitis C at the time of presentation?
                </Text>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Alcohol Abuse</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>Is the patient known to abuse alcohol as per CAGE criteria?</Text>
            </ScrollView>
        </View>
    );
    }
}
