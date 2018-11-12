import * as React from "react";
import * as Expo from "expo";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import * as firebase from "firebase";
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

export default class Login extends React.Component<IAuthProps, IAuthState> {
    private constructor(props: IAuthProps) {
        super(props);
        this.state = { email: "", password: "", errorMessage: "" };
    }

    public render() {
        return (
            <View>
                <Text>Login</Text>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={( email ) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={( password ) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                <Text>Don't have and account</Text>
                <Button
                    title="Create your own account"
                    onPress={() => this.props.navigation.navigate("SignUp")}
                />
                </View>
        );
    }

    private handleLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then(() => this.props.navigation.navigate("Main"))
            .catch((error: Error) => this.setState({ errorMessage: error.message }));
    }
}
