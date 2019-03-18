import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { FAB, TouchableRipple, Text as Txt } from "react-native-paper";
import firebase from "firebase";
import { AsyncStorage, NetInfo, Text, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Logo } from "../components/Logo";
import { handleConnectivityChange } from "../config/dataHandler";
import * as actions from "../config/redux/actions";
import colors from "../config/colors";
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

//    static navigationOptions = {
//        title: 'What would you like to do?',
//        headerStyle: {
//            backgroundColor: colors.darkorange,
//        },
//        headerTintColor: '#fff',
//        headerTitleStyle: {
//            alignSelf: "center",
//            color: "#ffffff",
//            flex: 1,
//            fontSize: 18,
//            fontWeight: "300",
//            textAlign: "left",
//        },
//    }

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
                    <TouchableRipple rippleColor="#EC9154">
                        <FAB icon="assignment" label="Register New Patient"
                            onPress={() => this.props.navigation.navigate("entry")} />
                    </TouchableRipple>
                    <TouchableRipple rippleColor="#EC9154">
                        <FAB icon="timeline" label="Enter FollowUp LFTs"
                            onPress={() => this.props.navigation.navigate("followUp")} />
                    </TouchableRipple>
                    <TouchableRipple rippleColor="#EC9154">
                        <FAB icon="timeline" label="Register Mortality"
                            onPress={() => this.props.navigation.navigate("mortality")} />
                    </TouchableRipple>
                    <TouchableRipple rippleColor="#EC9154">
                        <FAB icon="timeline" label="Log Out"
                            onPress={() => this.handleSignOut} />
                    </TouchableRipple>
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
