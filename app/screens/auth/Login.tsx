import * as firebase from "firebase";
import * as React from "react";
import * as Animatable from "react-native-animatable";
import { Alert, Linking, StyleSheet, View } from "react-native";
import { Button, Divider, Headline, HelperText, Text, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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

    private AnimationRef: any;

    public render() {
        return (
            <Animatable.View
                animation="fadeInRight"
                duration={250}
                easing="linear"
                ref={ref => {this.AnimationRef = ref}}
                style={styles.container}
                useNativeDriver={true}
            >
                <Logo portrait={true} />
                <Divider style={{backgroundColor: "black", flex: 0.02}} />
                <View style={styles.containerForm}>
                    <Headline>Login</Headline>
                    <KeyboardAwareScrollView enableOnAndroid={true}
                        extraHeight={5}
                    extraScrollHeight={5}>
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
                    </KeyboardAwareScrollView>
                    <View style={styles.button}>
                        <Button 
                            disabled={this.state.isSubmitting}
                            loading={this.state.isSubmitting}
                            mode="contained"
                            onPress={this.handleLogin}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                </View>
                <Divider style={{marginVertical: 10}} />
                <HelperText style={styles.helpText}>Don't have an account?</HelperText>
                <View style={styles.button}>
                    <Button
                        disabled={this.state.isSubmitting}
                        loading={this.state.isSubmitting}
                        mode="contained"
                        onPress={() => {
                            Linking.openURL("mailto:admin@dili.pk");
                        }}>
                        <Text>Email Us</Text>
                    </Button>
                </View>
            </Animatable.View>
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
                this.AnimationRef.fadeOutRight();
                this.props.navigation.navigate("main");
            })
            .catch((error: Error) => {
                this.setState({isSubmitting: false});
                Alert.alert(error.message);
            });
    }
}
