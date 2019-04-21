import firebase from "firebase";
import * as React from "react";
import * as Animatable from "react-native-animatable";
import {
    ActivityIndicator,
    Alert,
    BackHandler,
    AsyncStorage,
    View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Appbar, Button, Paragraph, Surface, Text, TextInput } from "react-native-paper";
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
    private constructor(props: IMortalityScreenProp) {
        super(props);
        this.state = {
            isSubmitting: false,
            nic: "",
            mortalityDate: "",
        };
        this.handleBackPress = this.handleBackPress.bind(this);
    }

    public componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }
    public componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }

    private handleBackPress() {
        this.props.navigation.navigate("main");
        return true;
    }

    public render() {
    return (
        <Animatable.View animation="fadeIn" easing="linear" duration={250} useNativeDriver={true}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => this.props.navigation.navigate("main")} />
                <Appbar.Content title="Register Mortality" />
            </Appbar.Header>
            <Paragraph style={{textAlign: "center"}}>
                Please enter the National ID Card number and date of death of the patient
                suspected to have deceased from drug induced liver injury
            </Paragraph>
            {/* TODO: implement fuzzy search */}
            <View style={styles.wrapperForm}>
                <TextInputMask 
                    customTextInput={TextInput}
                    customTextInputProps={{
                        label: "MR Number",
                        mode: "outlined",
                        style: styles.inputForm,
                    }}
                    keyboardType="numeric"
                    onChangeText={(text) => {this.setState({nic: text})}}
                    options={{mask: "999-99-99"}}
                    style={styles.input}
                    type="custom"
                    value={this.state.nic}
                />
                <DateEntry
                    dateHandler={(date) => this.setState({mortalityDate: date.format("YYYY-MM-DD")})}
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
        </Animatable.View>
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
            this.props.navigation.navigate("main");
        })
        .catch((error: Error) => console.log(error.message));
    }
}
