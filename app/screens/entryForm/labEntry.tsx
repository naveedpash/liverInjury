import * as _ from "lodash";
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
import { NavigationInjectedProps, NavigationScreenProp, NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { labs } from "../../config/redux/types";
import { saveLabs } from "../../config/redux/actions";
import { patientAction, initialPatient } from "../../config/redux/reducers";
import { DateEntry } from "../../components/DateEntry";
import { handleData,listenStatus } from "../../config/dataHandler";
import { validateNIC, validateLabValue } from "../../config/validation";
// styles
import styles from "./styles";

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Labs must be after 31st December 2018";

export interface ILabScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<patientAction>;
    onSubmit: NavigationInjectedProps<() => void>;
}

class LabsEntry extends React.Component<ILabScreenProps, labs> {
    constructor(props: ILabScreenProps) {
        super(props);
        this.state = {
            bilirubin: initialPatient.bilirubin,
            bilirubinDate: initialPatient.bilirubinDate,
            pt: initialPatient.pt,
            ptDate: initialPatient.ptDate,
            alt: initialPatient.alt,
            altDate: initialPatient.altDate,
            alkphos: initialPatient.alkphos,
            alkphosDate: initialPatient.alkphosDate,
            antihavigm: initialPatient.antihavigm,
            antihavigmDate: initialPatient.antihavigmDate,
            antihevigm: initialPatient.antihevigm,
            antihevigmDate: initialPatient.antihevigmDate,
            hbsag: initialPatient.hbsag,
            hbsagDate: initialPatient.hbsagDate,
            antihcvigm: initialPatient.antihcvigm,
            antihcvigmDate: initialPatient.antihcvigmDate,
            isSubmitting: false,
        };
    }

    public render() {
    {/* Laboratory Tests */}
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={payload => {
                    this.props.dispatch({type: "SAVE_LABS", payload: this.state});
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
        this.props.dispatch({type: "SAVE_LABS", payload: this.state});
    };
}

export default connect()(LabsEntry);
