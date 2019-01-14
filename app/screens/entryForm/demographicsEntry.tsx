import firebase from "firebase";
import moment from "moment";
import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { demographics } from "../../config/redux/types";
import { saveDemographics } from "../../config/redux/actions";
import { demographicsAction, initialDemographics } from "../../config/redux/reducers";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Add border between each entry element

export interface IEntryScreenProps {
    navigation: NavigationScreenProp<any, any>;
    dispatch: Dispatch<demographicsAction>;
}

class Entry extends React.Component<IEntryScreenProps, demographics> {
    constructor(props: IEntryScreenProps) {
        super(props);
        this.state = initialDemographics;
    }

    public render() {
        const user = firebase.auth().currentUser;
        return (
            <View style={styles.container}>
            {/* Patient Demographics */}
                <ScrollView>
                    <View>
                        <Text style={styles.helpText}>{moment(today).format("DD/MM/YYYY")}</Text>
                    </View>
                    <View style={styles.wrapper}>
                        {/* TODO: Automatically pull entrant name from stored ID */}
                        <Text style={styles.label}>Entrant</Text>
                        <Text style={styles.input}>{user!.email}</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>NIC Number</Text>
                        <TextInputMask 
                            keyboardType="numeric"
                            onChangeText={text => this.setState({nic: text})}
                            options={{mask: "99999-9999999-9"}}
                            style={styles.input}
                            type="custom"
                            value={this.state.nic}
                        />
                    </View>
                        <Text style={styles.helpText}>Enter the National ID Card number of the patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.input}
                            onChangeText={ value => this.setState({name: value}) }
                        />
                    </View>
                        <Text style={styles.helpText}>Name of the Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput style={styles.input}
                            keyboardType="numeric"
                            onChangeText={ value => this.setState({age: parseInt(value)}) }
                        />
                    </View>
                        <Text style={styles.helpText}>Age of the Patient at the time of Registration</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Gender</Text>
                        <Picker style={styles.picker}
                            onValueChange={value => this.setState({gender: value})}
                            selectedValue={this.state.gender}
                        >
                            <Picker.Item label="Male" value={"male"} />
                            <Picker.Item label="Female" value={"female"} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Gender of Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Consent</Text>
                        <Picker style={styles.picker}
                            onValueChange={value => this.setState({consent: value})}
                            selectedValue={this.state.consent}
                        >
                            <Picker.Item label="Yes" value={"yes"} />
                            <Picker.Item label="No" value={"no"} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Has the patient given consent to be registered?</Text>
                    </View>
                    <Button color="black" title="Next" onPress={this.next} />
                </ScrollView>
            </View>
        );
    }

    public next = () => {
        this.props.dispatch({type: "SAVE_DEMOGRAPHICS", payload: this.state});
        this.props.navigation.navigate("dili");
    };
}

export default connect()(Entry);
