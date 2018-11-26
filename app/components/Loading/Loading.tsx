import * as React from "react";
import { ActivityIndicator, Text, View } from "react-native";
// styles
import styles from "./styles";

export class Loading extends React.Component {
    render() {
        return (
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size="large" color="black" />
                </View>
                <Text>Loading</Text>
            </View>
        );
    }
}
