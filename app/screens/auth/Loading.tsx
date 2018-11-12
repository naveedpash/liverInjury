import * as React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import firebase from "firebase";
import { firebaseConfig } from "../../config/authentication";
// styles
import styles from "./styles";

firebase.initializeApp(firebaseConfig);

export interface IAuthProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class Loading extends React.Component<IAuthProps, any> {
    public componentDidMount() {
        firebase.auth().onAuthStateChanged(( user: any ) => {
            this.props.navigation.navigate(user ? "Main" : "Login");
        });
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        );
    }

}
