import * as React from "react";
import { View } from "react-native";
import { ActivityIndicator, Divider, HelperText } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import firebase from "firebase";
import { firebaseConfig } from "../../config/authentication";
import { Logo } from "../../components/Logo";
import background from "../background.jpg";
// styles
import styles from "./styles";

firebase.initializeApp(firebaseConfig);

export interface IAuthProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class Loading extends React.Component<IAuthProps, any> {
    public componentDidMount() {
        firebase.auth().onAuthStateChanged(( user: any ) => {
            if (user) {
                this.props.navigation.navigate("main");
            } else {
                this.props.navigation.navigate("Login");
            }
        });
    }

    public render() {
        return (
            <View style={styles.container}>
                <Logo portrait={true} />
                <Divider style={{backgroundColor: "black", flex: 0.02}} />
                <View style={styles.containerForm}>
                    <View style={styles.wrapper}>
                        <HelperText style={styles.helpText}>Loading</HelperText>
                        <ActivityIndicator color="grey" size="large" />
                    </View>
                </View>
            </View>
        );
    }

}
