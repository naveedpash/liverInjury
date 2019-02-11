import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp, NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { history } from "../../config/redux/types";
import { saveHistory } from "../../config/redux/actions";
import { patientAction, initialPatient } from "../../config/redux/reducers";
// styles
import styles from "./styles";

export interface IHistoryScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
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
                <NavigationEvents
                    onWillBlur={payload => {
                        this.props.dispatch({type: "SAVE_HISTORY", payload: this.state});
                    }}
                />
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Jaundice</Text>
                        <Picker style={styles.picker}
                            onValueChange={value => this.setState({jaundice: value})}
                            selectedValue={this.state.jaundice}
                        >
                            <Picker.Item label="No" value={"no"}/>
                            <Picker.Item label="Yes" value={"yes"}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complaining of jaundice on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Abdominal Pain</Text>
                        <Picker style={styles.picker}
                            onValueChange={value => this.setState({pain: value})}
                            selectedValue={this.state.pain}
                        >
                            <Picker.Item label="No" value={"no"}/>
                            <Picker.Item label="Yes" value={"yes"}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of abdominal pain on initial presentation?</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Pruritis</Text>
                        <Picker style={styles.picker}
                            onValueChange={value => this.setState({pruritis: value})}
                            selectedValue={this.state.pruritis}
                        >
                            <Picker.Item label="No" value={"no"}/>
                            <Picker.Item label="Yes" value={"yes"}/>
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Is the patient complain of pruritis on initial presentation?</Text>
                    <Button color="black" title="Next" onPress={this.next} />
                </ScrollView>
            </View>
        );
    }

    public next = () => {
        this.props.dispatch({type: "SAVE_HISTORY", payload: this.state});
        this.props.navigation.navigate("labs");
    };
}

export default connect()(HistoryEntry);
