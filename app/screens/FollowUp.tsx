// imports
import firebase from "firebase";
import moment from "moment";
import * as React from "react";
import { ActivityIndicator,
    Alert,
    AsyncStorage,
    Button,
    KeyboardAvoidingView,
    NetInfo,
    ScrollView,
    Text,
    TextInput,
    View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../components/DateEntry";
import { Loading } from "../components/Loading";
import { handleData,listenStatus } from "../config/dataHandler";
import { validateNIC, validateLabValue } from "../config/validation";
// styles
import styles from "./styles";

// TODO: Need to add dates for each lab -- DONE
// TODO: Need to add popUp confirmed if saved -- DONE
// TODO: Need to save to local storage if no internet connection and upload upon connecting to web -- DONE
// TODO: Need to add styling.
// TODO: Need to add ability to update late if needed

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Labs must be after 31st December 2018";

// Props and State
export interface IFollowUpProps {
    navigation: NavigationScreenProp<any, any>;
}

export interface IFollowUpState {
    nic: string;
    bilirubin: string;
    bilirubinDate: string;
    alt: string;
    altDate: string;
    ast: string;
    astDate: string;
    alkphos: string;
    alkphosDate: string;
    inr: string;
    inrDate: string;
    isSubmitting: boolean;
}

export default class FollowUp extends React.Component<IFollowUpProps, any> {
    public static navigationOptions = {
        title: 'Enter FollowUp LFTs',
        headerStyle: {
            backgroundColor: '#910505',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#ffffff",
            flex: 1,
            fontSize: 18,
            fontWeight: "300",
            textAlign: "left",
        },
    }

    private constructor(props: IFollowUpProps) {
        super(props);
        this.state = {
            nic: "",
            bilirubin: "",
            bilirubinDate: "",
            alt: "",
            altDate: "",
            ast: "",
            astDate: "",
            alkphos: "",
            alkphosDate: "",
            inr: "",
            inrDate: "",
            user: firebase.auth().currentUser,
            isSubmitting: false,
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                <Loading isLoading={this.state.isSubmitting} />
                <View>
                    <Text style={styles.helpText}>
                        Please enter the laboratory values of the registered patient suspected
                        to have drug induced liver injury
                    </Text>
                </View>
                {/* TODO: implement fuzzy search */}
                    <ScrollView keyboardShouldPersistTaps="always">
                        <KeyboardAvoidingView behavior="padding">
                        <View>
                            <View style={styles.wrapper}>
                                <Text style={styles.label}>NIC Number</Text>
                                <TextInputMask 
                                    keyboardType="numeric"
                                    onChangeText={(text) => {this.setState({nic: text})}}
                                    options={{mask: "99999-9999999-9"}}
                                    style={styles.input}
                                    type="custom"
                                    value={this.state.nic}
                                />
                            </View>
                            <Text style={styles.helpText}>
                                Enter the National ID Card Number of the Patient
                            </Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Bilirubin (U/L)</Text>
                            <TextInput
                                keyboardType="numeric"
                                onChangeText={(text) => {this.setState({bilirubin: text})}}
                                style={styles.inputForm}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({bilirubinDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>AST (U/L)</Text>
                            <TextInput
                                keyboardType="numeric"
                                onChangeText={(text) => {this.setState({ast: text})}}
                                style={styles.inputForm}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({astDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>ALT (U/L)</Text>
                            <TextInput
                                keyboardType="numeric"
                                onChangeText={(text) => {this.setState({alt: text})}}
                                style={styles.inputForm}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({altDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Alkaline Phosphatase{"\n"}(U/L)</Text>
                            <TextInput
                                keyboardType="numeric"
                                onChangeText={(text) => {this.setState({alkphos: text})}}
                                style={styles.inputForm}
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
                                keyboardType="numeric"
                                onChangeText={(text) => {this.setState({inr: text})}}
                                style={styles.inputForm}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({inrDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <Button title="Submit" onPress={this.submit} color="black" />
                </KeyboardAvoidingView>
            </ScrollView>
            </View>
        );
    }

    private submit = () => {
        this.setState({isSubmitting: true});
        if (!validateNIC(this.state.nic)) {
            Alert.alert("Please enter a valid NIC number");
            return;
        }
        if (!validateLabValue(this.state.ast) 
            || !validateLabValue(this.state.alt)
            || !validateLabValue(this.state.alkphos)
            || !validateLabValue(this.state.inr)) {
            Alert.alert("Please enter valid lab values");
            return;
        }
        const user = firebase.auth().currentUser;
        const toSave = {
            alt: this.state.alt,
            altDate: this.state.altDate,
            ast: this.state.ast,
            astDate: this.state.astDate,
            alkphos: this.state.alkphos,
            alkphosDate: this.state.alkphosDate,
            inr: this.state.inr,
            inrDate: this.state.inrDate,
            enteredBy: user!.uid,
        };
        handleData("followup/", this.state.nic, toSave)
        .then(() => {
            listenStatus.get()
            .then((islistening) => {
                this.setState({isSubmitting: false});
                if (!islistening) {
                    this.props.navigation.push("Notification", {
                        heading: "Success!",
                        message: "Your data has been stored online.",
                        type: "success",
                    });
                } else {
                    this.props.navigation.push("Notification", {
                        heading: "Saved",
                        message: "We could not establish an internet connection." + "\n" +
                            "Your data has been stored on this device." + "\n" + 
                            "Data will be transferred online automatically when internet is connected",
                        type: "warn",
                    });
                }
            })
        })
        .catch((error: Error) => Alert.alert(error.message));
    }
}
