import firebase from "firebase";
import moment from "moment";
import * as React from "react";
import { Picker, ScrollView, Text, TextInput, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { demographics, newpatient } from "../../config/redux/types";
import { patientAction, initialPatient } from "../../config/redux/reducers";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Add border between each entry element

export interface IEntryScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
    nic: string;
    name: string;
    age: string;
    gender: "male" | "female";
    consent: "yes" | "no";
}

class Entry extends React.Component<IEntryScreenProps, demographics> {
    constructor(props: IEntryScreenProps) {
        super(props);
        this.state = {
            nic: initialPatient.nic,
            name: initialPatient.name,
            age: initialPatient.age,
            gender: initialPatient.gender,
            consent: initialPatient.consent
        };
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
                        <Text style={styles.label}>MR Number</Text>
                        <TextInputMask 
                            keyboardType="numeric"
                            onChangeText={text => this.props.dispatch({type: "SAVE_NIC", payload: text})}
                            options={{mask: "999-99-99"}}
                            style={styles.input}
                            type="custom"
                            value={this.props.nic}
                        />
                    </View>
                        <Text style={styles.helpText}>Enter the National ID Card number of the patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.input}
                            onChangeText={text => this.props.dispatch({type: "SAVE_NAME", payload: text})}
                            value={this.props.name}
                        />
                    </View>
                        <Text style={styles.helpText}>Name of the Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput style={styles.input}
                            keyboardType="numeric"
                            onChangeText={text => this.props.dispatch({type: "SAVE_AGE", payload: text})}
                            value={this.props.age}
                        />
                    </View>
                        <Text style={styles.helpText}>Age of the Patient at the time of Registration</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Gender</Text>
                        <Picker style={styles.picker}
                            onValueChange={(text) => {
                                this.props.dispatch({type: "SAVE_GENDER", payload: text});
                                }
                            }
                            selectedValue={this.props.gender}
                        >
                            <Picker.Item label="Male" value={"male"} />
                            <Picker.Item label="Female" value={"female"} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Gender of Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Consent</Text>
                        <Picker style={styles.picker}
                            onValueChange={(text) => {
                                this.props.dispatch({type: "SAVE_CONSENT", payload: text});
                                }
                            }
                            selectedValue={this.props.consent}
                        >
                            <Picker.Item label="Yes" value={"yes"} />
                            <Picker.Item label="No" value={"no"} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Has the patient given consent to be registered?</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state: Array<newpatient>) => ({
    nic: state.slice(-1)[0].nic,
    name: state.slice(-1)[0].name,
    age: state.slice(-1)[0].age,
    gender: state.slice(-1)[0].gender,
    consent: state.slice(-1)[0].consent,
})

export default connect(mapStateToProps)(Entry);
