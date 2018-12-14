import * as Expo from "expo";
import * as firebase from "firebase";
import * as React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationActions, NavigationScreenProp, StackActions } from "react-navigation";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { validateEmail } from "../../config/validation";
// styles
import styles from "./styles";

const invalidEmailMessage: string = "Please enter a valid email address.";

export interface IAuthProps {
    navigation: NavigationScreenProp<any, any>;
}

export interface IAuthState {
    email: string;
    password: string;
    errorMessage: string;
    isSubmitting: boolean;
}

export default class Login extends React.Component<IAuthProps, IAuthState> {
    private constructor(props: IAuthProps) {
        super(props);
        this.state = {
            email: "",        password: "",
            errorMessage: "", isSubmitting: false,
        };
    }

    public render() {
        return (
            <View>
                <View style={styles.container}>
                    <Loading isLoading={this.state.isSubmitting} />
                    <Text style={styles.heading}>Login</Text>
                    <View style={styles.wrapperForm}>
                        <TextInput
                            style={styles.inputForm}
                            autoCapitalize="none"
                            placeholder="Email"
                            onChangeText={( email ) => this.setState({ email })}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.wrapperForm}>
                        <TextInput
                            style={styles.inputForm}
                            secureTextEntry
                            autoCapitalize="none"
                            placeholder="Password"
                            onChangeText={( password ) => this.setState({ password })}
                            value={this.state.password}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Login"
                            color="black"
                            onPress={this.handleLogin} />
                    </View>
                    <Text style={styles.helpText}>Don't have an account</Text>
                    <View style={styles.button}>
                        <Button
                            title="Create your own account"
                            color="black"
                            onPress={() => this.props.navigation.navigate("SignUp")} />
                    </View>
                </View>
                <Logo />
            </View>
        );
    }

    private handleLogin = () => {
        this.setState({isSubmitting: true});
        if (!validateEmail) {
            Alert.alert(invalidEmailMessage);
            return;
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then(() => {
                this.setState({isSubmitting: false});
                this.props.navigation.navigate("main");
            })
            .catch((error: Error) => {
                this.setState({isSubmitting: false});
                Alert.alert(error.message);
            });
    }
}
