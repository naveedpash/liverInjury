// base requirements
import { omit } from "lodash";
import firebase from "firebase";
import * as React from "react";
import * as Animatable from "react-native-animatable";
import { Dispatch } from "redux";
// for presentation
import { BackHandler, ListView, ScrollView, View } from "react-native";
import { Appbar, Button, Divider, HelperText, List, Text } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import DemographicsEntry from "./demographicsEntry";
import DiliEntry from "./diliEntry";
import HistoryEntry from "./historyEntry";
import LabEntry from "./labEntry";
// for data handling
import { handleData } from "../../config/dataHandler";
import { patientAction, initialPatient } from "../../config/redux/reducers";
import store from "../../config/redux/store";
// styles
import styles from "./styles";

interface IEntryFormProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
}
interface IEntryFormState {
    isSubmitting: boolean;
}

export default class EntryForm extends React.Component<IEntryFormProps, IEntryFormState> {

    public constructor(props: any) {
        super(props)
        this.state = { isSubmitting: false }
        this.save = this.save.bind(this);
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
                    <Appbar.Content title="Register New Patient" />
                    <Appbar.Action accessibilityLabel="Save" disabled={this.state.isSubmitting} icon="save" onPress={this.save} />
                </Appbar.Header>
                <HelperText style={{textAlign: "center"}}>
                    Please complete all four sections, then press Save in the top right corner.
                </HelperText>
                <ScrollView horizontal={true}>
                    <DemographicsEntry />
                    <DiliEntry />
                    <HistoryEntry />
                    <LabEntry />
                </ScrollView>
            </Animatable.View>
        );
    }

    public save() {
        this.setState({isSubmitting: true});
        const currentState = store.getState().slice(-1)[0];
        const currentPatient = currentState.nic;
        const user = firebase.auth().currentUser;
        const toSave = {...omit(currentState,["nic"]), enteredBy: user!.uid};
        handleData("newpatient/", currentPatient, toSave)
        .then(() => {
            this.props.dispatch({type: "RESET_PATIENT", payload: initialPatient});
            this.setState({isSubmitting: false});
            this.props.navigation.pop();
        })
        .catch((error: Error) => this.setState({isSubmitting: false}));
    }
}
