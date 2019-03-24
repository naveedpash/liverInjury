import * as React from "react";
import { Button, Picker, ScrollView, View } from "react-native";
import { Card, HelperText, RadioButton, Text, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { history, newpatient } from "../../config/redux/types";
import { patientAction, initialPatient } from "../../config/redux/reducers";
// styles
import styles from "./styles";
// colors
import colors from "../../config/colors";

export interface IHistoryScreenProps {
    dispatch: Dispatch<patientAction>;
    jaundice: "yes" | "no";
    pain: "yes" | "no";
    pruritis: "yes" | "no";
}

class HistoryEntry extends React.Component<IHistoryScreenProps, history> {
    constructor(props: IHistoryScreenProps) {
        super(props);
    }

    public render() {
    {/* Patient History */ }
    return (
            <View style={styles.container}>
                <Card elevation={3}>
                    <Card.Title title="Patient History" />
                    <Card.Content>
                        <ScrollView>
                            <Text style={{alignSelf: "center"}}>Jaundice</Text>
                            <View style={styles.wrapper}>
                                <RadioButton.Group
                                    onValueChange={(value) => {
                                        this.props.dispatch({type: "SAVE_JAUNDICE", payload: value});
                                    }}
                                    value={this.props.jaundice}
                                >
                                    <View>
                                        <Text>No</Text>
                                        <RadioButton color={colors.darkorange} value={"no"}/>
                                    </View>
                                    <View>
                                        <Text>Yes</Text>
                                        <RadioButton color={colors.darkorange} value={"yes"}/>
                                    </View>
                                </RadioButton.Group>
                            </View>
                            <HelperText style={styles.helpText}>Is the patient complaining of jaundice on initial presentation?</HelperText>
                            <Text style={{alignSelf: "center"}}>Abdominal Pain</Text>
                            <View style={styles.wrapper}>
                                <RadioButton.Group
                                    onValueChange={(value) => {
                                        this.props.dispatch({type: "SAVE_PAIN", payload: value});
                                    }}
                                    value={this.props.pain}
                                >
                                    <View>
                                        <Text>No</Text>
                                        <RadioButton color={colors.darkorange} value={"no"}/>
                                    </View>
                                    <View>
                                        <Text>Yes</Text>
                                        <RadioButton color={colors.darkorange} value={"yes"}/>
                                    </View>
                                </RadioButton.Group>
                            </View>
                            <HelperText style={styles.helpText}>Is the patient complain of abdominal pain on initial presentation?</HelperText>
                            <Text style={{alignSelf: "center"}}>Pruritis</Text>
                            <View style={styles.wrapper}>
                                <RadioButton.Group
                                    onValueChange={(value) => {
                                        this.props.dispatch({type: "SAVE_PRURITIS", payload: value});
                                    }}
                                    value={this.props.pruritis}
                                >
                                    <View>
                                        <Text>No</Text>
                                        <RadioButton color={colors.darkorange} value={"no"}/>
                                    </View>
                                    <View>
                                        <Text>Yes</Text>
                                        <RadioButton color={colors.darkorange} value={"yes"}/>
                                    </View>
                                </RadioButton.Group>
                            </View>
                            <HelperText style={styles.helpText}>Is the patient complain of pruritis on initial presentation?</HelperText>
                        </ScrollView>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state: Array<newpatient>) => ({
    jaundice: state.slice(-1)[0].jaundice,
    pain: state.slice(-1)[0].pain,
    pruritis: state.slice(-1)[0].pruritis,
})

export default connect(mapStateToProps)(HistoryEntry);
