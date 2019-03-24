// imports
import firebase from "firebase";
import moment from "moment";
import * as React from "react";
import { ActivityIndicator,
    Alert,
    AsyncStorage,
    KeyboardAvoidingView,
    NetInfo,
    ScrollView,
    View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Appbar, Button, Paragraph, Surface, Text, TextInput } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../components/DateEntry";
import { handleData,listenStatus } from "../config/dataHandler";
import { validateNIC, validateLabValue } from "../config/validation";
// styles
import styles from "./styles";

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
            <View>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => this.props.navigation.navigate("main")} />
                    <Appbar.Content title="Enter FollowUp Labs" />
                </Appbar.Header>
                <View>
                    <Paragraph style={{textAlign: "center"}}>
                        Please enter the laboratory values of the registered patient suspected
                        to have drug induced liver injury
                    </Paragraph>
                </View>
                {/* TODO: implement fuzzy search */}
                    <ScrollView keyboardShouldPersistTaps="always">
                        <KeyboardAvoidingView behavior="padding">
                        <View>
                            <TextInputMask 
                                customTextInput={TextInput}
                                customTextInputProps={{
                                    label: "MR Number",
                                    mode: "outlined",
                                }}
                                keyboardType="numeric"
                                onChangeText={(text) => {this.setState({nic: text})}}
                                options={{mask: "999-99-99"}}
                                style={styles.input}
                                type="custom"
                                value={this.state.nic}
                            />
                            <Text style={styles.helpText}>
                                Enter the National ID Card Number of the Patient
                            </Text>
                        </View>
                        <View style={styles.wrapper}>
                            <TextInput
                                keyboardType="numeric"
                                label="Bilirubin (U/L)"
                                mode="outlined"
                                onChangeText={(text) => {this.setState({bilirubin: text})}}
                                style={styles.inputForm}
                                value={this.state.bilirubin}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({bilirubinDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <TextInput
                                keyboardType="numeric"
                                label="AST (U/L)"
                                onChangeText={(text) => {this.setState({ast: text})}}
                                mode="outlined"
                                style={styles.inputForm}
                                value={this.state.ast}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({astDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <TextInput
                                keyboardType="numeric"
                                label="ALT (U/L)"
                                mode="outlined"
                                onChangeText={(text) => {this.setState({alt: text})}}
                                style={styles.inputForm}
                                value={this.state.alt}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({altDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <TextInput
                                keyboardType="numeric"
                                label="Alkaline Phosphatase (U/L)"
                                mode="outlined"
                                onChangeText={(text) => {this.setState({alkphos: text})}}
                                style={styles.inputForm}
                                value={this.state.alkphos}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({alkphosDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <TextInput
                                keyboardType="numeric"
                                label="INR"
                                mode="outlined"
                                onChangeText={(text) => {this.setState({inr: text})}}
                                style={styles.inputForm}
                                value={this.state.inr}
                            />
                            <DateEntry
                                dateHandler={(date) => this.setState({inrDate: date.format("YYYY-MM-DD")})}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <Button onPress={this.submit}
                            disabled={this.state.isSubmitting}
                            loading={this.state.isSubmitting}
                            mode="contained"
                            style={styles.button}
                        >
                            <Text>Submit</Text>
                        </Button>
                </KeyboardAvoidingView>
            </ScrollView>
            </View>
        );
    }

    private submit = () => {
        this.setState({isSubmitting: true});
        if (!validateNIC(this.state.nic)) {
            Alert.alert("Please enter a valid NIC number");
            this.setState({isSubmitting: false});
            return;
        }
        if (!validateLabValue(this.state.ast) 
            || !validateLabValue(this.state.alt)
            || !validateLabValue(this.state.alkphos)
            || !validateLabValue(this.state.inr)) {
            Alert.alert("Please enter valid lab values");
            this.setState({isSubmitting: false});
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
                this.setState({isSubmitting: false});
                this.props.navigation.navigate("main");
        })
        .catch((error: Error) => Alert.alert(error.message));
    }
}
