import * as React from "react";
import { Button, Picker, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

export interface IExamScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class ExamEntry extends React.Component<IExamScreenProps, object> {
    public render() {
    {/* Patient Physical Examination */}
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.label}>Rash</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>Is the patient presenting with rash on initial examination?</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.label}>Fever</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>
                    Is the patient presenting with fever (> 38C) on initial examination?
                </Text>
            </View>
            <View>
                <View>
                    <Text style={styles.label}>Icteric</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>Is the patient presenting with jaundice on initial examination?</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.label}>Hypotension</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <Text style={styles.helpText}>Is the patient hypotensive on initial examination?</Text>
            </View>
            <Button title="Next"
                    color="black"
                    onPress={() => this.props.navigation.navigate("lab")}
            />
        </View>
    );
    }
}
