import firebase from "firebase";
import * as React from "react";
import * as Animatable from "react-native-animatable";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Divider, Headline, HelperText, Text, TextInput } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
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

    public render() {
        return (
            <Animatable.View animation="fadeInRight" easing="linear" duration={250} useNativeDriver={true} style={styles.container}>
                <Logo portrait={true} />
                <Divider style={{backgroundColor: "black", flex: 0.02}} />
                <View style={styles.containerForm}>
                    <Headline>Sign Up</Headline>
                    <View style={styles.wrapperForm}>
                        <TextInput
                            label="Email"
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={( email ) => this.setState({ email })}
                            mode="outlined"
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.wrapperForm}>
                        <TextInput
                            secureTextEntry
                            label="Password"
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={( password ) => this.setState({ password })}
                            mode="outlined"
                            value={this.state.password}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            disabled={this.state.isSubmitting}
                            loading={this.state.isSubmitting}
                            mode="contained"
                            onPress={this.handleSignUp}>
                            <Text>Sign Up</Text>
                        </Button>
                    </View>
                    <Divider style={{marginVertical: 10}} />
                    <HelperText>Already have an account?</HelperText>
                    <View style={styles.button}>
                        <Button 
                            disabled={this.state.isSubmitting}
                            loading={this.state.isSubmitting}
                            mode="contained"
                            onPress={() => this.props.navigation.navigate("Login")}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                </View>
            </Animatable.View>
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
