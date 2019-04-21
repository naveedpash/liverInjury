import firebase from "firebase";
import moment from "moment";
import * as React from "react";
import { KeyboardAvoidingView, Picker, ScrollView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Card, HelperText, RadioButton, Text, TextInput, Title } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { demographics, newpatient } from "../../config/redux/types";
import { patientAction, initialPatient } from "../../config/redux/reducers";
// styles
import styles from "./styles";
// colors
import colors from "../../config/colors";

const today: Date = new Date();

export interface IEntryScreenProps {
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
    }

    public render() {
        const user = firebase.auth().currentUser;
        {/* Patient Demographics */}
        return (
            <View>
                <Card elevation={3} style={styles.container}>
                    <Card.Title title="Demographics" />
                        <KeyboardAwareScrollView
                            enableOnAndroid={true}
                            extraScrollHeight={30}
                            resetScrollToCoords={{x: 0, y: 0}}
                        >
                            <Card.Content>
                                <View>
                                    <HelperText style={styles.helpText}>{moment(today).format("DD/MM/YYYY")}</HelperText>
                                    </View>
                                    <View style={styles.wrapper}>
                                        {/* TODO: Automatically pull entrant name from stored ID */}
                                        <Text>Entrant</Text>
                                        <Text>{user!.email}</Text>
                                        </View>
                                        <View>
                                            <TextInputMask 
                                                customTextInput={TextInput}
                                                customTextInputProps={{
                                                    label: "MR Number",
                                                    mode: "outlined",
                                                    style: styles.input,
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={text => this.props.dispatch({type: "SAVE_NIC", payload: text})}
                                                options={{mask: "999-99-99"}}
                                                style={styles.inputText}
                                                type="custom"
                                                value={this.props.nic}
                                            />
                                            <HelperText style={styles.helpText}>Enter the National ID Card number of the patient</HelperText>
                                        </View>
                                        <View>
                                        <TextInput style={styles.input}
                                            label="Name"
                                            mode="outlined"
                                            onChangeText={text => this.props.dispatch({type: "SAVE_NAME", payload: text})}
                                            value={this.props.name}
                                        />
                                        <HelperText style={styles.helpText}>Name of the Patient</HelperText>
                                    </View>
                                    <View>
                                        <TextInput style={styles.input}
                                        label="Age"
                                        mode="outlined"
                                        keyboardType="numeric"
                                        onChangeText={text => this.props.dispatch({type: "SAVE_AGE", payload: text})}
                                        value={this.props.age}
                                    />
                                    <HelperText style={styles.helpText}>Age of the Patient at the time of Registration</HelperText>
                                </View>
                                <View>
                                    <View style={styles.wrapper}>
                                        <Text>Gender</Text>
                                        <RadioButton.Group 
                                            onValueChange={(text) => {
                                                this.props.dispatch({type: "SAVE_GENDER", payload: text});
                                            }}
                                            value={this.props.gender}
                                        >
                                            <View>
                                                <Text>Male</Text>
                                                <RadioButton color={colors.darkorange} value={"male"} />
                                            </View>
                                            <View>
                                                <Text>Female</Text>
                                                <RadioButton color={colors.darkorange} value={"female"} />
                                            </View>
                                        </RadioButton.Group>
                                    </View>
                                    <HelperText style={styles.helpText}>Gender of the Patient</HelperText>
                                    </View>
                                    <View>
                                        <View style={styles.wrapper}>
                                            <Text>Consent</Text>
                                            <RadioButton.Group
                                                onValueChange={(text) => {
                                                    this.props.dispatch({type: "SAVE_CONSENT", payload: text});
                                                }}
                                                value={this.props.consent}
                                            >
                                            <View>
                                                <Text>Yes</Text>
                                                <RadioButton color={colors.darkorange} value="yes" />
                                            </View>
                                            <View>
                                                <Text>No</Text>
                                                <RadioButton color={colors.darkorange} value="no" />
                                            </View>
                                        </RadioButton.Group>
                                    </View>
                                    <HelperText style={styles.helpText}>Has the patient given consent to be registered?</HelperText>
                                    </View>
                                </Card.Content>
                            </KeyboardAwareScrollView>
                </Card>
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
