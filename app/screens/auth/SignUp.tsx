import firebase from "firebase";
import * as React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Loading } from "../../components/Loading";
import { validateEmail } from "../../config/validation";
import { Logo } from "../../components/Logo";
// styles
import styles from "./styles";

export interface IAuthProps {
    navigation: NavigationScreenProp<any, any>;
}

export interface IAuthState {
    email: string;
    password: string;
    errorMessage: string;
    isSubmitting: boolean;
}

export default class SignUp extends React.Component<IAuthProps, IAuthState> {
    constructor(props: IAuthProps) {
        super(props);
        this.state = { email: "", password: "", errorMessage: "", isSubmitting: false };
    }

    // TODO: integrate react-native popup alerts and define global colors
    public render() {
        return (
            <View>
                <View style={styles.container}>
                    <Loading isLoading={this.state.isSubmitting} />
                    <Text style={styles.heading}>Sign Up</Text>
                    <View style={styles.wrapperForm}>
                        <TextInput
                            placeholder="Email"
                            autoCapitalize="none"
                            style={styles.inputForm}
                            onChangeText={( email ) => this.setState({ email })}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.wrapperForm}>
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            autoCapitalize="none"
                            style={styles.inputForm}
                            onChangeText={( password ) => this.setState({ password })}
                            value={this.state.password}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Sign Up" 
                            color="black"
                            onPress={this.handleSignUp} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Already have an account? Login"
                            color="black"
                            onPress={() => this.props.navigation.navigate("Login")}
                        />
                    </View>
                </View>
                <Logo />
            </View>
        );
    }

    private handleSignUp = () => {
        if (!validateEmail(this.state.email)) {
            Alert.alert("Please enter a valid email address.");
            return;
        }
        if (this.state.password === "") {
            Alert.alert("Password cannot be blank.");
            return;
        }
        this.setState({isSubmitting: true});
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({isSubmitting: false});
                this.props.navigation.navigate("main");
            })
            .catch(( error: Error ) => this.setState({ errorMessage: error.message }));
    }
}
