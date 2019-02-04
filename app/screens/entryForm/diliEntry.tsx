import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp, NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { newpatient } from "../../config/redux/types";
import { savePatient } from "../../config/redux/actions";
import { patientAction, initialPatient } from "../../config/redux/reducers";
import store from "../../config/redux/store";
// styles
import styles from "./styles";

// TODO: Add border between each entry element
export interface IDiliScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
}

class DiliEntry extends React.Component<IDiliScreenProps, newpatient> {
    constructor(props: IDiliScreenProps) {
        super(props);
        this.state = initialPatient;
    }

    public render() {
        return (
            <View style={styles.container}>
                {/* DILI Episode */}
                {/* TODO: implement RxNorm coding system */}
                <NavigationEvents
                    onDidFocus={payload => {
                        const currentState = store.getState().slice(-1)[0];
                        this.setState(currentState);
                    }}
                    onWillBlur={payload => {
                        this.props.dispatch({type: "SAVE_PATIENT", payload: this.state});
                    }}
                />
                <ScrollView>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Drug Name</Text>
                            <TextInput style={styles.inputText}
                                onChangeText={ value => this.setState({drug: value}) }
                            />
                        </View>
                        <Text style={styles.helpText}>Drug suspected to have caused drug induced liver injury</Text>
                    </View>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Drug Dose</Text>
                            <TextInput style={styles.inputForm}
                                onChangeText={ value => this.setState({dose: value}) }
                            />
                            <Picker style={styles.picker}
                                onValueChange={value => this.setState({unit: value})}
                                selectedValue={this.state.unit}
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
                                onChangeText={ value => this.setState({indication: value}) }
                        />
                        <Text style={styles.helpText}>Indication for which suspected drug was originally prescribed</Text>
                    </View>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Re-challenged?</Text>
                            <Picker style={styles.picker}
                                onValueChange={value => this.setState({rechallenged: value})}
                                selectedValue={this.state.rechallenged}
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
                                onChangeText={ value => this.setState({challengeResult: value}) }
                        />
                        <Text style={styles.helpText}>What was the result of the Re-challenge?</Text>
                    </View>
                    <Button color="black" title="Next" onPress={this.next} />
                </ScrollView>
            </View>
        );
    }

    public next = () => {
        this.props.dispatch({type: "SAVE_PATIENT", payload: this.state});
        this.props.navigation.navigate("history");
    };
}

export default connect()(DiliEntry);
