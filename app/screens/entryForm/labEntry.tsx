import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

export interface ILabScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class ExamEntry extends React.Component<ILabScreenProps, object> {
    public render() {
    {/* Laboratory Tests */}
    return (
        <View>
            <View>
                <View>
                    <Text>Please enter the results of the following laboratory tests done on initial presentation</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Bilirubin (mg/dL)</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <Text>AST (mg/dL)</Text>
                    <TextInput />
                    <DateEntry />
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>ALT (mg/dL)</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Alkaline Phosphatase (mg/dL)</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Anti-HAV IgM</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Anti-HBc antibody</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>HBsAg</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Anti-HCV antibody</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>HCV RNA</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>ANA</Text>
                        <TextInput />
                        <DateEntry />
                    </View>
                </View>
                <View>
                    <Text>Biopsy Report</Text>
                    {/* Camera Input */}
                </View>
            </View>
        </View>
    );
    }
}
