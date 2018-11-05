import * as React from 'react';
import { Logo } from '../components/Logo';
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// styles
import styles from "./styles";

export default () => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="plus" size={32} color="black" />
                    <Text style={styles.buttonText}>Register New Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="plus" size={32} color="black" />
                    <Text style={styles.buttonText}>Enter FollowUp LFTs</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="plus" size={32} color="black" />
                    <Text style={styles.buttonText}>Register Mortality</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="plus" size={32} color="black" />
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
