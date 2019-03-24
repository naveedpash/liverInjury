import * as React from "react";
import { Button, Picker, ScrollView, View } from "react-native";
import { Card, HelperText, RadioButton, Text, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { dili, newpatient } from "../../config/redux/types";
import { patientAction, initialPatient } from "../../config/redux/reducers";
// styles
import styles from "./styles";
// colors
import colors from "../../config/colors";

// TODO: Add border between each entry element
export interface IDiliScreenProps {
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
    }

    public render() {
        return (
            <View style={styles.container}>
                <Card elevation={3}>
                    <Card.Title title="DILI Episode" />
                    <Card.Content>
                {/* DILI Episode */}
                {/* TODO: implement RxNorm coding system */}
                        <ScrollView>
                            <View>
                                <View style={styles.wrapper}>
                                    <TextInput style={styles.input}
                                        label="Drug Name"
                                        mode="outlined"
                                        onChangeText={value => this.props.dispatch({type: "SAVE_DRUG", payload: value})}
                                        value={this.props.drug}
                                    />
                                </View>
                                <HelperText style={styles.helpText}>Drug suspected to have caused drug induced liver injury</HelperText>
                            </View>
                            <View>
                                <TextInput style={styles.input}
                                    keyboardType="numeric"
                                    label="Drug Dose"
                                    mode="outlined"
                                    onChangeText={value => this.props.dispatch({type: "SAVE_DOSE", payload: value})}
                                    value={this.props.dose}
                                />
                                <View style={styles.wrapper}>
                                    <RadioButton.Group
                                        onValueChange={ (value) => {
                                            this.props.dispatch({type: "SAVE_UNIT", payload: value});
                                        }}
                                        value={this.props.unit}
                                    >
                                        <View>
                                            <Text>Milligrams</Text>
                                            <RadioButton color={colors.darkorange} value="mg" />
                                        </View>
                                        <View>
                                            <Text>Grams</Text>
                                            <RadioButton color={colors.darkorange} value="g" />
                                        </View>
                                        <View>
                                            <Text>Milliliters</Text>
                                            <RadioButton color={colors.darkorange} value="mL" />
                                        </View>
                                        <View>
                                            <Text>Micrograms</Text>
                                            <RadioButton color={colors.darkorange} value="mcg" />
                                        </View>
                                    </RadioButton.Group>
                                </View>
                                <HelperText style={styles.helpText}>Dose at which suspected drug was taken by the patient</HelperText>
                            </View>
                            <View>
                                <TextInput style={styles.input} 
                                    label="Indication"
                                    multiline={true}
                                    onChangeText={(value) => {
                                        this.props.dispatch({type: "SAVE_INDICATION", payload: value});
                                    }}
                                    value={this.props.indication}
                                />
                                <HelperText style={styles.helpText}>Indication for which suspected drug was originally prescribed</HelperText>
                            </View>
                            <View>
                                <Text>Re-challenged?</Text>
                                <View style={styles.wrapper}>
                                    <RadioButton.Group
                                        onValueChange={ (value) => {
                                            this.props.dispatch({type: "SAVE_RECHALLENGED", payload: value});
                                        }}
                                        value={this.props.rechallenged}
                                    >
                                        <View>
                                            <Text>No</Text>
                                            <RadioButton color={colors.darkorange} value={"no"} />
                                        </View>
                                        <View>
                                            <Text>Yes</Text>
                                            <RadioButton color={colors.darkorange} value={"yes"} />
                                        </View>
                                    </RadioButton.Group>
                                </View>
                                <HelperText style={styles.helpText}>
                                    Was the patient re-challenged with the drug suspected to have caused liver injury
                                </HelperText>
                            </View>
                            <View>
                                <TextInput style={styles.input}
                                    label="Rechallenge Result"
                                    multiline={true}
                                    onChangeText={ (value) => {
                                        this.props.dispatch({type: "SAVE_CHALLENGERESULT", payload: value});
                                    }}
                                    value={this.props.challengeResult}
                                />
                                <HelperText style={styles.helpText}>What was the result of the Re-challenge?</HelperText>
                            </View>
                        </ScrollView>
                    </Card.Content>
                </Card>
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
