import * as React from "react";
import { NavigationScreenProps } from "react-navigation";
import { Logo } from "../components/Logo";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// styles
import styles from "./styles";

interface IhomeScreenProps {
    navigation: NavigationScreenProps<any, any>;   
};

export default class homeScreen extends React.Component<IhomeScreenProps, object> {
    constructor(props: IhomeScreenProps) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate('entry')}>
                        <MaterialCommunityIcons name="plus-circle" size={32} color="black" />
                        <Text style={styles.buttonText}>Register New Patient</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate('followUp')}>
                        <MaterialCommunityIcons name="test-tube" size={32} color="black" />
                        <Text style={styles.buttonText}>Enter FollowUp LFTs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => this.props.navigation.navigate('mortality')}>
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
    };
};
