import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationScreenProp, NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { newpatient } from "../../config/redux/types";
import { savePatient } from "../../config/redux/actions";
import { patientAction, initialPatient } from "../../config/redux/reducers";
import store from "../../config/redux/store";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Labs must be after 31st December 2018";

export interface ILabScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
}

class LabsEntry extends React.Component<ILabScreenProps, newpatient> {
    constructor(props: ILabScreenProps) {
        super(props);
        this.state = initialPatient;
    }

    public render() {
    {/* Laboratory Tests */}
    return (
        <View style={styles.container}>
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
                <Text style={styles.helpText}>Please enter the results of the following laboratory tests done on initial presentation</Text>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Bilirubin (mg/dL)</Text>
                        <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({bilirubin: value})}
                        />
                        <DateEntry
                            dateHandler={(date) => this.setState({bilirubinDate: date.format("YYYY-MM-DD")})}
                            validateAgainst={validateAgainst}
                            validationMessage={invalidDateMessage}
                        />
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>PT</Text>
                    <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({pt: value})}
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({ptDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>ALT (mg/dL)</Text>
                    <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({alt: value})}
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({altDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Alkaline Phosphatase (mg/dL)</Text>
                    <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({alkphos: value})}
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({alkphosDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Anti-HAV IgM</Text>
                    <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({antihavigm: value})}
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({antihavigmDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Anti-HEV IgM</Text>
                    <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({antihevigm: value})}
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({antihevigmDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>HBsAg</Text>
                    <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({hbsag: value})}
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({hbsagDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Anti-HCV antibody</Text>
                    <TextInput style={styles.inputForm}
                            onChangeText={value => this.setState({antihcvigm: value})}
                    />
                    <DateEntry
                        dateHandler={(date) => this.setState({antihcvigmDate: date.format("YYYY-MM-DD")})}
                        validateAgainst={validateAgainst}
                        validationMessage={invalidDateMessage}
                    />
                </View>
                <Button color="black" title="Save" onPress={this.save} />
            </ScrollView>
        </View>
    );
    }

    public save = () => {
        this.props.dispatch({type: "SAVE_PATIENT", payload: this.state});
    };
}

export default connect()(LabsEntry);
