import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { dili, newpatient } from "../../config/redux/types";
import { patientAction, initialPatient } from "../../config/redux/reducers";
// styles
import styles from "./styles";

// TODO: Add border between each entry element
export interface IDiliScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
    drug: string;
    dose: string;
    unit: "mg" | "g" | "mL" | "mcg";
    indication: string;
    rechallenged: "yes" | "no";
    challengeResult: string
}

class DiliEntry extends React.Component<IDiliScreenProps, dili> {
    constructor(props: IDiliScreenProps) {
        super(props);
        this.state = {
            drug: initialPatient.dose,
            dose: initialPatient.dose,
            unit: initialPatient.unit,
            indication: initialPatient.indication,
            rechallenged: initialPatient.rechallenged,
            challengeResult: initialPatient.challengeResult
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                {/* DILI Episode */}
                {/* TODO: implement RxNorm coding system */}
                <ScrollView>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Drug Name</Text>
                            <TextInput style={styles.inputText}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_DRUG", payload: value});
                                }}
                                value={this.props.drug}
                            />
                        </View>
                        <Text style={styles.helpText}>Drug suspected to have caused drug induced liver injury</Text>
                    </View>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Drug Dose</Text>
                            <TextInput style={styles.inputForm}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_DOSE", payload: value});
                                }}
                                value={this.props.dose}
                            />
                            <Picker style={styles.picker}
                                onValueChange={ (value) => {
                                    this.props.dispatch({type: "SAVE_UNIT", payload: value});
                                }}
                                selectedValue={this.props.unit}
                            >
                                <Picker.Item label="Milligrams" value="mg" />
                                <Picker.Item label="Grams" value="g" />
                                <Picker.Item label="Milliliters" value="mL" />
                                <Picker.Item label="Micrograms" value="mcg" />
                            </Picker>
                        </View>
                        <Text style={styles.helpText}>Dose at which suspected drug was taken by the patient</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Indication</Text>
                        <TextInput style={styles.inputText} multiline={true}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_INDICATION", payload: value});
                                }}
                                value={this.props.indication}
                        />
                        <Text style={styles.helpText}>Indication for which suspected drug was originally prescribed</Text>
                    </View>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Re-challenged?</Text>
                            <Picker style={styles.picker}
                                onValueChange={ (value) => {
                                    this.props.dispatch({type: "SAVE_RECHALLENGED", payload: value});
                                }}
                                selectedValue={this.props.rechallenged}
                            >
                                <Picker.Item label="No" value={"no"} />
                                <Picker.Item label="Yes" value={"yes"} />
                            </Picker>
                        </View>
                        <Text style={styles.helpText}>
                            Was the patient re-challenged with the drug suspected to have caused liver injury
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Result of Re-Challenge</Text>
                        <TextInput style={styles.inputText} multiline={true}
                                onChangeText={ (value) => {
                                    this.props.dispatch({type: "SAVE_CHALLENGERESULT", payload: value});
                                }}
                                value={this.props.challengeResult}
                        />
                        <Text style={styles.helpText}>What was the result of the Re-challenge?</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state: Array<newpatient>) => ({
    drug: state.slice(-1)[0].drug,
    dose: state.slice(-1)[0].dose,
    unit: state.slice(-1)[0].unit,
    indication: state.slice(-1)[0].indication,
    rechallenged: state.slice(-1)[0].rechallenged,
    challengeResult: state.slice(-1)[0].challengeResult,
})

export default connect(mapStateToProps)(DiliEntry);
