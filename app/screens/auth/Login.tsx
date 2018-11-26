import * as Expo from "expo";
import * as firebase from "firebase";
import * as React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationActions, NavigationScreenProp, StackActions } from "react-navigation";
import { Loading } from "../../components/Loading";
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
                <Loading isLoading={this.state.isSubmitting} />
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
        if (!validateEmail) {
            Alert.alert(invalidEmailMessage);
            return;
        }
        this.setState({isSubmitting: true});
        firebase
            .auth()
            .signInWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then(() => {
                this.setState({isSubmitting: false});
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: "Main",
                        })
                    ]
                });
                this.props.navigation.dispatch(resetAction);
            })
            .catch((error: Error) => console.log(error.message));
    }
}
