import * as React from "react";
import { ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    View } from "react-native";
import { Card, Divider, HelperText, RadioButton, Text, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { labs, newpatient } from "../../config/redux/types";
import { patientAction } from "../../config/redux/reducers";
import { DateEntry } from "../../components/DateEntry";
import { validateNIC, validateLabValue } from "../../config/validation";
// styles
import styles from "./styles";
// colors
import colors from "../../config/colors";

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Labs cannot be in the future";

export interface ILabScreenProps {
    dispatch: Dispatch<patientAction>;
    bilirubin: string;
    bilirubinDate: string;
    pt: string
    ptDate: string;
    alt: string;
    altDate: string;
    alkphos: string;
    alkphosDate: string;
    antihavigm: "reactive" | "nonreactive" | "unavailable";
    antihavigmDate: string;
    antihevigm: "reactive" | "nonreactive" | "unavailable";
    antihevigmDate: string;
    hbsag: "reactive" | "nonreactive" | "unavailable";
    hbsagDate: string;
    antihcvigm: "reactive" | "nonreactive" | "unavailable";
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
    }

    public render() {
    {/* Laboratory Tests */}
    return (
        <ScrollView>
            <View style={styles.container}>
            <Card elevation={3}>
                <Card.Title title="Lab Tests" />
                <Card.Content>
                        <HelperText style={styles.helpText}>Please enter the results of the following laboratory tests done on initial presentation</HelperText>
                        <View>
                            <View style={styles.wrapperForm}>
                                <TextInput style={styles.input}
                                    keyboardType="numeric"
                                    label="Bilirubin (U/L)"
                                    mode="outlined"
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
                        <View style={styles.wrapperForm}>
                            <TextInput style={styles.input}
                                keyboardType="numeric"
                                label="PT"
                                mode="outlined"
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
                        <View style={styles.wrapperForm}>
                            <TextInput style={styles.input}
                                keyboardType="numeric"
                                label="ALT (mg/dL)"
                                mode="outlined"
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
                        <View style={styles.wrapperForm}>
                            <TextInput style={styles.input}
                                keyboardType="numeric"
                                label="Alkaline Phosphatase (mg/dL)"
                                mode="outlined"
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
                        <Divider style={{marginVertical: 10}} />
                        <View style={styles.wrapperForm}>
                            <Text>Anti-HAV IgM</Text>
                            <DateEntry
                                dateHandler={(date) => {
                                    this.props.dispatch({type: "SAVE_ANTIHAVIGMDATE", payload: date.format("YYYY-MM-DD")});
                                }}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <RadioButton.Group style={styles.picker}
                                onValueChange={(text) => {
                                    this.props.dispatch({type: "SAVE_ANTIHAVIGM", payload: text});
                                }}
                                value={this.props.antihavigm}
                            >
                                <View>
                                    <Text>Unavailable</Text>
                                    <RadioButton color={colors.darkorange} value={"unavailable"} />
                                </View>
                                <View>
                                    <Text>Non-Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"nonreactive"} />
                                </View>
                                <View>
                                    <Text>Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"reactive"} />
                                </View>
                            </RadioButton.Group>
                        </View>
                        <Divider style={{marginVertical: 10}} />
                        <View style={styles.wrapperForm}>
                            <Text>Anti-HEV IgM</Text>
                            <DateEntry
                                dateHandler={(date) => {
                                    this.props.dispatch({type: "SAVE_ANTIHEVIGMDATE", payload: date.format("YYYY-MM-DD")});
                                }}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <RadioButton.Group
                                onValueChange={(text) => {
                                    this.props.dispatch({type: "SAVE_ANTIHEVIGM", payload: text});
                                }}
                                value={this.props.antihevigm}
                            >
                                <View>
                                    <Text>Unavailable</Text>
                                    <RadioButton color={colors.darkorange} value={"unavailable"} />
                                </View>
                                <View>
                                    <Text>Non-Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"nonreactive"} />
                                </View>
                                <View>
                                    <Text>Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"reactive"} />
                                </View>
                            </RadioButton.Group>
                        </View>
                        <Divider style={{marginVertical: 10}} />
                        <View style={styles.wrapperForm}>
                            <Text>HBsAg</Text>
                            <DateEntry
                                dateHandler={(date) => {
                                    this.props.dispatch({type: "SAVE_HBSAGDATE", payload: date.format("YYYY-MM-DD")});
                                }}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <RadioButton.Group
                                onValueChange={(text) => {
                                    this.props.dispatch({type: "SAVE_HBSAG", payload: text});
                                }}
                                value={this.props.hbsag}
                            >
                                <View>
                                    <Text>Unavailable</Text>
                                    <RadioButton color={colors.darkorange} value={"unavailable"} />
                                </View>
                                <View>
                                    <Text>Non-Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"nonreactive"} />
                                </View>
                                <View>
                                    <Text>Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"reactive"} />
                                </View>
                            </RadioButton.Group>
                        </View>
                        <Divider style={{marginVertical: 10}} />
                        <View style={styles.wrapperForm}>
                            <Text>Anti-HCV antibody</Text>
                            <DateEntry
                                dateHandler={(date) => {
                                    this.props.dispatch({type: "SAVE_ANTIHCVIGMDATE", payload: date.format("YYYY-MM-DD")});
                                }}
                                validateAgainst={validateAgainst}
                                validationMessage={invalidDateMessage}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <RadioButton.Group
                                onValueChange={(text) => {
                                    this.props.dispatch({type: "SAVE_ANTIHCVIGM", payload: text});
                                }}
                                value={this.props.antihcvigm}
                            >
                                <View>
                                    <Text>Unavailable</Text>
                                    <RadioButton color={colors.darkorange} value={"unavailable"} />
                                </View>
                                <View>
                                    <Text>Non-Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"nonreactive"} />
                                </View>
                                <View>
                                    <Text>Reactive</Text>
                                    <RadioButton color={colors.darkorange} value={"reactive"} />
                                </View>
                            </RadioButton.Group>
                        </View>
                </Card.Content>
            </Card>
        </View>
    </ScrollView>
    );
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
