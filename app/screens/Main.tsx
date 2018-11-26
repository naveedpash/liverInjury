import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import firebase from "firebase";
import { AsyncStorage, NetInfo, Text, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Logo } from "../components/Logo";
import { handleConnectivityChange } from "../config/dataHandler";
// styles
import styles from "./styles";

export interface IHomeScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends React.Component<IHomeScreenProps, any> {
    private constructor(props: IHomeScreenProps) {
        super(props);
    }

    static navigationOptions = {
        title: 'Karachi Registery for Drug Induced Liver Injury',
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
                <TouchableOpacity style={styles.touchable}
                    onPress={() => this.props.navigation.navigate("entry")}>
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
                <Logo />
            </View>
        );
    }

    private handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .catch((error: Error) => console.log(error.message));
    }
}
