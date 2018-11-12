import * as React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import firebase from "firebase";
// styles
import styles from "./styles";

export interface IAuthProps {
    navigation: NavigationScreenProp<any, any>;
}

export interface IAuthState {
    email: string;
    password: string;
    errorMessage: string;
}

export default class SignUp extends React.Component<IAuthProps, IAuthState> {
    constructor(props: IAuthProps) {
        super(props);
        this.state = { email: "", password: "", errorMessage: "" };
    }

    // TODO: integrate react-native popup alerts and define global colors
    public render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={( email ) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={( password ) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Sign Up" onPress={this.handleSignUp} />
                <Button
                    title="Already have an account? Login"
                    onPress={() => this.props.navigation.navigate("Login")}
                />
                </View>
        );
    }

    private handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate("main"))
            .catch(( error: Error ) => this.setState({ errorMessage: error.message }));
    }
}
