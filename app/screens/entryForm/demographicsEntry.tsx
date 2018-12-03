import firebase from "firebase";
import moment from "moment";
import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { reduxForm } from "redux-form";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Add border between each entry element

export interface IEntryScreenParams {
    consent: number;
}

export interface IEntryScreenProps {
    navigation: NavigationScreenProp<any, IEntryScreenParams>;
}

export default class Entry extends React.Component<IEntryScreenProps, any> {
    private constructor(props: IEntryScreenProps) {
        super(props);
        this.props.navigation.setParams({
            consent: 0,
        })
    }
    
    public render() {
        const user = firebase.auth().currentUser;
        return (
            <View style={styles.container}>
            {/* Patient Demographics */}
                <ScrollView>
                    <View>
                        <Text style={styles.helpText}>{moment(today).format("DD/MM/YYYY")}</Text>
                    </View>
                    <View style={styles.wrapper}>
                        {/* TODO: Automatically pull entrant name from stored ID */}
                        <Text style={styles.label}>Entrant</Text>
                        <Text style={styles.input}>{user!.email}</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>NIC Number</Text>
                        <TextInput style={styles.input}/>
                    </View>
                        <Text style={styles.helpText}>Enter the National ID Card number of the patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                        <Text style={styles.helpText}>Name of the Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput style={styles.input} />
                    </View>
                        <Text style={styles.helpText}>Age of the Patient at the time of Registration</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Gender</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="Male" value={0} />
                            <Picker.Item label="Female" value={1} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Gender of Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Consent</Text>
                        <Picker 
                            style={styles.picker}
                            selectedValue={this.props.navigation.state.params.consent}
                            onValueChange={(value) => this.props.navigation.setParams({consent: value})}>
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Has the patient given consent to be registered?</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
