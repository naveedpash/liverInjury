import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Labs must be after 31st December 2018";

export interface ILabHxScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class LabHxEntry extends React.Component<ILabHxScreenProps, object> {
    public render() {
    {/* Prior Lab Tests */}
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.helpText}>
                Please enter any of the following laboratory reports that are available from prior to the
                current episode of suspected drug induced liver injury
                </Text>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>AST</Text>
                    <TextInput 
                        style={styles.inputForm}
                        keyboardType="numeric"
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({astDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>ALT</Text>
                    <TextInput 
                        style={styles.inputForm}
                        keyboardType="numeric"
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({altDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Alkaline{"\n"}Phosphatase</Text>
                    <TextInput 
                        style={styles.inputForm}
                        keyboardType="numeric"
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({alkphosDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>INR</Text>
                    <TextInput 
                        style={styles.inputForm}
                        keyboardType="numeric"
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({inrDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
            </ScrollView>
        </View>
    );
    }
}
