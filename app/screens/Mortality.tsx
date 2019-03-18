import firebase from "firebase";
import * as React from "react";
import {
    ActivityIndicator,
    Alert,
    AsyncStorage,
    Button,
    View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Text, TextInput } from "react-native-paper";
import { NavigationActions, NavigationScreenProp, StackActions } from "react-navigation";
import { DateEntry } from "../components/DateEntry";
import { handleData, listenStatus } from "../config/dataHandler";
import { validateNIC } from "../config/validation";
// styles
import styles from "./styles";

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Mortality must be after 31st December 2018";

export interface IMortalityScreenProp {
    navigation: NavigationScreenProp<any, any>;
}

export interface IMortalityScreenState {
    isSubmitting: boolean;
    nic: string;
    mortalityDate: string;
}

export default class Mortality extends React.Component<IMortalityScreenProp, IMortalityScreenState> {
    public static navigationOptions = {
        title: "Register Mortality",
        headerStyle: {
            backgroundColor: "#910505",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            alignSelf: "center",
            color: "#ffffff",
            flex: 1,
            fontSize: 18,
            fontWeight: "300",
            paddingBottom: 10,
            textAlign: "left",
        },
    };

    private constructor(props: IMortalityScreenProp) {
        super(props);
        this.state = {
            isSubmitting: false,
            nic: "",
            mortalityDate: "",
        };
    }

    public render() {
    return (
        <View style={styles.container}>
            <Text style={styles.helpText}>
                Please enter the National ID Card number of the patient suspected to have deceased
                from drug induced liver injury
            </Text>
            {/* TODO: implement fuzzy search */}
            <View style={styles.wrapperForm}>
                <Text style={styles.label}>MR Number</Text>
                <TextInputMask 
                    keyboardType="numeric"
                    onChangeText={(text) => {this.setState({nic: text})}}
                    options={{mask: "999-99-99"}}
                    style={styles.input}
                    type="custom"
                    value={this.state.nic}
                />
            </View>
            <View style={styles.wrapperForm}>
                <Text style={styles.label}>Date of Death</Text>
                <DateEntry
                    dateHandler={(date) => this.setState({mortalityDate: date.format("YYYY-MM-DD")})}
                    validateAgainst={validateAgainst}
                    validationMessage={invalidDateMessage}
                />
            </View>
            <View style={styles.button}>
                { this.state.isSubmitting 
                    ? <ActivityIndicator color="black"/> 
                    : <Button onPress={this.submit} color="black" title="Save" /> }
            </View>
        </View>
    );
    }

    private submit = () => {
        this.setState({isSubmitting: true});
        const user = firebase.auth().currentUser;
        if (!validateNIC(this.state.nic)) {
            this.setState({isSubmitting: false});
            Alert.alert("Please enter a valid NIC number.");
            return;
        }
        if (this.state.mortalityDate === "") {
            this.setState({isSubmitting: false});
            Alert.alert("Please select the date on which the patient deceased.");
            return;
        }
        handleData("mortality/", this.state.nic,
                   {
                        mortalityDate: this.state.mortalityDate,
                        enteredBy: user!.uid,
                   })
        .then(() => {
            this.setState({isSubmitting: false});
            this.props.navigation.pop();
        })
        .catch((error: Error) => console.log(error.message));
    }
}
