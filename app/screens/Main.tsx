import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Logo } from "../components/Logo";
// styles
import styles from "./styles";

export interface IHomeScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends React.Component<IHomeScreenProps, any> {
    private constructor(props: IHomeScreenProps) {
        super(props);
    }

    public render() {
        return (
            <View style={styles.container}>
                <Logo />
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate("entry")}>
                        <MaterialCommunityIcons name="plus-circle" size={32} color="black" />
                        <Text style={styles.buttonText}>Register New Patient</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate("followUp")}>
                        <MaterialCommunityIcons name="test-tube" size={32} color="black" />
                        <Text style={styles.buttonText}>Enter FollowUp LFTs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate("mortality")}>
                        <MaterialCommunityIcons name="emoticon-dead" size={32} color="black" />
                        <Text style={styles.buttonText}>Register Mortality</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <MaterialCommunityIcons name="logout" size={32} color="black" />
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
