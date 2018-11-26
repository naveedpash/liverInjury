import * as React from "react";
import {
    ActivityIndicator,
    Alert,
    Button,
    Text,
    TextInput,
    View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../components/DateEntry";
import { Loading } from "../components/Loading";
import { validateNIC } from "../config/validation";
// styles
import styles from "./styles";

const validateAgainst: string = "2018-12-31";
const invalidDateMessage: string = "Date of Mortality must be after 31st December 2018";;

export interface IMortalityScreenProp {
    navigation: NavigationScreenProp<any, any>;
}

export interface IMortalityScreenState {
    isSubmitting: boolean;
    nic: string;
    mortalityDate: string;
}

export default class Mortality extends React.Component<IMortalityScreenProp, IMortalityScreenState> {
    private constructor(props: IMortalityScreenProp) {
        super(props);
        this.state = {
            isSubmitting: false,
            nic: "",
            mortalityDate: "",
        };
    }
    public render() {
    return (
        <View style={styles.container}>
            <Loading isLoading={this.state.isSubmitting} />   
            <Text style={styles.heading}>Mortality</Text>
            <Text style={styles.helpText}>
                Please enter the National ID Card number of the patient suspected to have deceased
                from drug induced liver injury
            </Text>
            {/* TODO: implement fuzzy search */}
            <View style={styles.wrapper}>
                <Text>NIC Number</Text>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={(text) => {this.setState({nic: text})}}
                />
                <DateEntry
                    dateHandler={(date) => this.setState({mortalityDate: date.format("YYYY-MM-DD")})}
                    validateAgainst={validateAgainst}
                    validationMessage={invalidDateMessage}
                />
            </View>
            <Button onPress={this.submit}
                    color="black"
                    title="Save" />
        </View>
    );
    }

    private submit = () => {
        this.setState({isSubmitting: true});
        if (!validateNIC(this.state.nic)) {
            this.setState({isSubmitting: false});
            Alert.alert("Please enter a valid NIC number.");
            return;
        }
        this.props.navigation.navigate("notification");
        this.setState({isSubmitting: false});
        console.log(this.state);
    }
}
