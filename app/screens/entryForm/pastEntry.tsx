import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
import { DateEntry } from "../components/DateEntry";
// styles
import styles from "./styles";

const pastEntry = () => {
    {/* Past Medical History */}
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Heart Failure</Text>
                        <Picker>
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>
                        Is the patient known to have heart failure?
                    </Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>TPN</Text>
                        <Picker>
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>
                        Is the patient known to have received total parenteral nutrition within the past 3 months?
                    </Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Hepatitis B</Text>
                        <Picker>
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>
                        Is the patient known to have active hepatitis B at the time of presentation?
                    </Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Hepatitis C</Text>
                        <Picker>
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>
                        Is the patient known to have active hepatitis C at the time of presentation?
                    </Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Alcohol Abuse</Text>
                        <Picker>
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient known to abuse alcohol as per CAGE criteria?</Text>
                </View>
            </View>
        </View>
    );
};

export default pastEntry;
