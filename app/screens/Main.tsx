import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import firebase from "firebase";
import { AsyncStorage, NetInfo, Text, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Logo } from "../components/Logo";
import { handleConnectivityChange } from "../config/dataHandler";
import * as actions from "../config/redux/actions";
import { patientAction, initialPatient } from "../config/redux/reducers";
// styles
import styles from "./styles";

export interface IHomeScreenProps {
    navigation: NavigationScreenProp<any, any>;
    resetEntryForm: () => any;
}

export class HomeScreen extends React.Component<IHomeScreenProps, any> {
    public constructor(props: IHomeScreenProps) {
        super(props);
    }

    static navigationOptions = {
        title: 'What would you like to do?',
        headerStyle: {
            backgroundColor: '#910505',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: "center",
            color: "#ffffff",
            flex: 1,
            fontSize: 18,
            fontWeight: "300",
            textAlign: "left",
        },
    }

    public componentWillMount() {
        AsyncStorage.getItem("islistening")
        .then((islistening) => {
            if (islistening === "true") {
                NetInfo.isConnected.addEventListener("connectionChange", handleConnectivityChange)
            }
        })
        .catch((error: Error) => console.log(error.message));
    }

    public componentWillUnmount() {
        AsyncStorage.getItem("islistening")
        .then((islistening) => {
            if (islistening === "true") {
                NetInfo.isConnected.removeEventListener("connectionChange", handleConnectivityChange)
            }
        })
        .catch((error: Error) => console.log(error.message));
    }

    public render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerMenu}>
                    <TouchableOpacity style={styles.touchable} onPress={() => {
                        this.props.resetEntryForm();
                        this.props.navigation.navigate("entry");
                    }}>
                        <MaterialCommunityIcons name="plus-circle" size={32} color="white" />
                        <Text style={styles.buttonText}>Register New Patient</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate("followUp")}>
                        <MaterialCommunityIcons name="test-tube" size={32} color="white" />
                        <Text style={styles.buttonText}>Enter FollowUp LFTs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate("mortality")}>
                        <MaterialCommunityIcons name="emoticon-dead" size={32} color="white" />
                        <Text style={styles.buttonText}>Register Mortality</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}
                        onPress={this.handleSignOut}>
                        <MaterialCommunityIcons name="logout" size={32} color="white" />
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: "black", flex: 0.02}} />
                <Logo portrait={false} />
            </View>
        );
    }

    private handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => this.props.navigation.navigate("Login"))
            .catch((error: Error) => console.log(error.message));
    }
}

const mapDispatchtoProps = (dispatch: Dispatch<patientAction>) => {
    return {
        resetEntryForm: () => dispatch(actions.resetPatient())
    }
}

export default connect(mapDispatchtoProps)(HomeScreen);
