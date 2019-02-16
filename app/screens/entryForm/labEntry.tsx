import { Notifications } from "expo";
import { omit } from "lodash";
import firebase from "firebase";
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
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { labs, newpatient } from "../../config/redux/types";
import { patientAction, initialPatient } from "../../config/redux/reducers";
import { DateEntry } from "../../components/DateEntry";
import { handleData } from "../../config/dataHandler";
import { validateNIC, validateLabValue } from "../../config/validation";
import store from "../../config/redux/store";
// styles
import styles from "./styles";

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Labs must be after 31st December 2018";

export interface ILabScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
    bilirubin: string;
    bilirubinDate: string;
    pt: string
    ptDate: string;
    alt: string;
    altDate: string;
    alkphos: string;
    alkphosDate: string;
    antihavigm: string;
    antihavigmDate: string;
    antihevigm: string;
    antihevigmDate: string;
    hbsag: string;
    hbsagDate: string;
    antihcvigm: string;
    antihcvigmDate: string;
}

interface ILabsScreenState {
    isSubmitting: boolean;
}

class LabsEntry extends React.Component<ILabScreenProps, ILabsScreenState> {
    constructor(props: ILabScreenProps) {
        super(props);
        this.state = {
            isSubmitting: false,
        };
        this.save = this.save.bind(this);
    }

    public render() {
    {/* Laboratory Tests */}
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.helpText}>Please enter the results of the following laboratory tests done on initial presentation</Text>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Bilirubin (mg/dL)</Text>
                        <TextInput style={styles.inputForm}
                            onChangeText={ (value) => {
                                this.props.dispatch({type: "SAVE_BILIRUBIN", payload: value});
                            }}
                            value={this.props.bilirubin}
                        />
                        <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_BILIRUBINDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                            validateAgainst={validateAgainst}
                            validationMessage={invalidDateMessage}
                        />
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>PT</Text>
                    <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_PT", payload: value});
                                }}
                                value={this.props.pt}
                    />
                    <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_PTDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>ALT (mg/dL)</Text>
                    <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_ALT", payload: value});
                                }}
                                value={this.props.alt}
                    />
                    <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_ALTDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Alkaline Phosphatase (mg/dL)</Text>
                    <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_ALKPHOS", payload: value});
                                }}
                                value={this.props.alkphos}
                    />
                    <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_ALKPHOSDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Anti-HAV IgM</Text>
                    <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_ANTIHAVIGM", payload: value});
                                }}
                                value={this.props.antihavigm}
                    />
                    <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_ANTIHAVIGMDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Anti-HEV IgM</Text>
                    <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_ANTIHEVIGM", payload: value});
                                }}
                                value={this.props.antihevigm}
                    />
                    <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_ANTIHEVIGMDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>HBsAg</Text>
                    <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_HBSAG", payload: value});
                                }}
                                value={this.props.hbsag}
                    />
                    <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_HBSAGDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Anti-HCV antibody</Text>
                    <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_ANTIHCVIGM", payload: value});
                                }}
                    />
                    <DateEntry
                        dateHandler={(date) => {
                            this.props.dispatch({type: "SAVE_ANTIHCVIGMDATE", payload: date.format("YYYY-MM-DD")});
                        }}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                { this.state.isSubmitting 
                    ? <ActivityIndicator color="black"/> 
                    : <Button title="Save" color="black" onPress={this.save} /> }
            </ScrollView>
        </View>
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
            this.props.navigation.navigate("entry");
        })
        .catch((error: Error) => console.log(error.message));
    }
}

const mapStateToProps = (state: Array<newpatient>) => ({
    bilirubin: state.slice(-1)[0].bilirubin,
    bilirubinDate: state.slice(-1)[0].bilirubinDate,
    pt: state.slice(-1)[0].pt,
    ptDate: state.slice(-1)[0].ptDate,
    alt: state.slice(-1)[0].alt,
    altDate: state.slice(-1)[0].altDate,
    alkphos: state.slice(-1)[0].alkphos,
    alkphosDate: state.slice(-1)[0].alkphosDate,
    antihavigm: state.slice(-1)[0].antihavigm,
    antihavigmDate: state.slice(-1)[0].antihavigmDate,
    antihcvigm: state.slice(-1)[0].antihcvigm,
    antihcvigmDate: state.slice(-1)[0].antihcvigmDate,
    antihevigm: state.slice(-1)[0].antihevigm,
    antihevigmDate: state.slice(-1)[0].antihevigmDate,
    hbsag: state.slice(-1)[0].hbsag,
    hbsagDate: state.slice(-1)[0].hbsagDate,
})

export default connect(mapStateToProps)(LabsEntry);
