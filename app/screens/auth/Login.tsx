import * as firebase from "firebase";
import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Divider, Headline, HelperText, Text, TextInput } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
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
            <View style={styles.container}>
                <Logo portrait={true} />
                <Divider style={{backgroundColor: "black", flex: 0.02}} />
                <View style={styles.containerForm}>
                    <Headline>Login</Headline>
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
                            label="Password"
                            style={styles.input}
                            secureTextEntry
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
                            onPress={this.handleLogin}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                    <Divider style={{marginVertical: 10}} />
                    <HelperText>Don't have an account?</HelperText>
                    <View style={styles.button}>
                        <Button
                            disabled={this.state.isSubmitting}
                            loading={this.state.isSubmitting}
                            mode="contained"
                            onPress={() => this.props.navigation.navigate("SignUp")}>
                            <Text>Create an account</Text>
                        </Button>
                    </View>
                </View>
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
