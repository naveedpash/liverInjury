import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp, NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { history, newpatient } from "../../config/redux/types";
import { patientAction, initialPatient } from "../../config/redux/reducers";
// styles
import styles from "./styles";

export interface IHistoryScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
    jaundice: "yes" | "no";
    pain: "yes" | "no";
    pruritis: "yes" | "no";
}

class HistoryEntry extends React.Component<IHistoryScreenProps, history> {
    constructor(props: IHistoryScreenProps) {
        super(props);
        this.state = {
            jaundice: initialPatient.jaundice,
            pain: initialPatient.pain,
            pruritis: initialPatient.pruritis,
        };
    }

    public render() {
    {/* Patient History */ }
    return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Jaundice</Text>
                        <Picker style={styles.picker}
                            onValueChange={(value) => {
                                this.props.dispatch({type: "SAVE_JAUNDICE", payload: value});
                            }}
                            selectedValue={this.props.jaundice}
                        >
                            <Picker.Item label="No" value={"no"}/>
                            <Picker.Item label="Yes" value={"yes"}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complaining of jaundice on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Abdominal Pain</Text>
                        <Picker style={styles.picker}
                            onValueChange={(value) => {
                                this.props.dispatch({type: "SAVE_PAIN", payload: value});
                            }}
                            selectedValue={this.props.pain}
                        >
                            <Picker.Item label="No" value={"no"}/>
                            <Picker.Item label="Yes" value={"yes"}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of abdominal pain on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Pruritis</Text>
                        <Picker style={styles.picker}
                            onValueChange={(value) => {
                                this.props.dispatch({type: "SAVE_PRURITIS", payload: value});
                            }}
                            selectedValue={this.props.pruritis}
                        >
                            <Picker.Item label="No" value={"no"}/>
                            <Picker.Item label="Yes" value={"yes"}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of pruritis on initial presentation?</Text>
                </ScrollView>
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
