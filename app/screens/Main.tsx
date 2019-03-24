import firebase from "firebase";
import * as React from "react";
import { Divider, FAB, Headline, Surface, TouchableRipple, Text as Txt } from "react-native-paper";
import { AsyncStorage, NetInfo, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Logo } from "../components/Logo";
import { handleConnectivityChange } from "../config/dataHandler";
// styles
import styles from "./styles";
// colors
import colors from "../config/colors";

export interface IHomeScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends React.Component<IHomeScreenProps, any> {
    public constructor(props: IHomeScreenProps) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
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
                <Logo portrait={false} />
                <View style={styles.containerMenu}>
                    <Headline style={{alignSelf: "center"}}>What would you like to do?</Headline>
                    <TouchableRipple>
                        <FAB icon="assignment" label="Register New Patient"
                            onPress={() => this.props.navigation.navigate("entry")} />
                    </TouchableRipple>
                    <TouchableRipple>
                        <FAB icon="timeline" label="Enter FollowUp LFTs"
                            onPress={() => this.props.navigation.navigate("followUp")} />
                    </TouchableRipple>
                    <TouchableRipple>
                        <FAB icon="cancel" label="Register Mortality"
                            onPress={() => this.props.navigation.navigate("mortality")} />
                    </TouchableRipple>
                    <TouchableRipple>
                        <FAB icon="exit-to-app" label="Log Out"
                            onPress={this.handleSignOut} />
                    </TouchableRipple>
                </View>
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
