import * as React from "react";
import { ActivityIndicator, ImageBackground, Text, View } from "react-native";
import { NavigationActions, NavigationScreenProp, StackActions } from "react-navigation";
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
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: "main",
                            params: { user: firebase.auth().currentUser }
                        }),
                    ]
                });
                this.props.navigation.dispatch(resetAction);
                return;
            }
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: "Login",
                        params: { user: firebase.auth().currentUser }
                    }),
                ]
            });
            this.props.navigation.dispatch(resetAction);
        });
    }

    public render() {
        return (
            <View style={styles.container}>
                <Logo portrait={true} />
                <View style={styles.containerForm}>
                    <View style={styles.wrapper}>
                        <Text style={styles.helpText}>Loading</Text>
                        <ActivityIndicator color="black" size="large" />
                    </View>
                </View>
            </View>
        );
    }

}
