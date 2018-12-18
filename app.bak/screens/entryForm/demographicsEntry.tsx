import firebase from "firebase";
import moment from "moment";
import * as React from "react";
import { Button, Picker, ScrollView, Text, TextInput, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { NavigationScreenProp } from "react-navigation";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { entryFormActions, saveDemographics } from "../../config/redux/actions";
import { demographics } from "../../config/redux/datadesign";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Add border between each entry element

export interface IEntryScreenProps {
    dispatch: Dispatch;
    navigation: NavigationScreenProp<any, any>;
}

class Entry extends React.Component<IEntryScreenProps, demographics> {
    public constructor(props: IEntryScreenProps) {
        super(props);
        this.state = {
            nic: "",
            name: "",
            age: 0,
            gender: "",
            consent: "",
        }
    }

    public render() {
        const user = firebase.auth().currentUser;
        return (
            <View style={styles.container}>
            {/* Patient Demographics */}
            <ScrollView
                keyboardDismissMode="none"
                keyboardShouldPersistTaps="handled"
            >
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
                        <TextInput style={styles.input}
                            value={this.state.nic}
                            onChangeText={(value) => this.setState({nic: value})}
                        />
                    </View>
                        <Text style={styles.helpText}>Enter the National ID Card number of the patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.input}
                            value={this.state.name}
                            onChangeText={(value) => this.setState({name: value})}
                        />
                    </View>
                        <Text style={styles.helpText}>Name of the Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput style={styles.input}
                            value={this.state.age.toString()}
                            onChangeText={(value) => this.setState({age: parseInt(value) || 0})}
                        />
                    </View>
                        <Text style={styles.helpText}>Age of the Patient at the time of Registration</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Gender</Text>
                        <Picker style={styles.picker}
                            selectedValue={this.state.gender}
                            onValueChange={(value) => this.setState({gender: value})}
                        >
                            <Picker.Item label="Male" value={0} />
                            <Picker.Item label="Female" value={1} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Gender of Patient</Text>
                    </View>
                    <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Consent</Text>
                        <Picker style={styles.picker}
                            selectedValue={this.state.consent}
                            onValueChange={(value) => this.setState({consent: value})}
                        >
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                        <Text style={styles.helpText}>Has the patient given consent to be registered?</Text>
                    </View>
                    <Button title="Next" onPress={this.next} color="black" />
                </ScrollView>
            </View>
        );
    }

    private next = () => {
        this.props.dispatch(saveDemographics(this.state));
        this.props.navigation.navigate("dili");
    }
}


// const mapStateToProps = (state: demographics) => (
//     state
// )
const mapDispatchToProps = (dispatch: Dispatch) => {
    next: (state: demographics) => dispatch(saveDemographics(state))
}

export default connect(
    mapDispatchToProps
)(Entry);
