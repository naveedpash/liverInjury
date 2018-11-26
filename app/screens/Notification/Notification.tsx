import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
// styles
import styles from "./styles";

export interface INotificationParams {
    heading: string;
    message: string;
    type: "success" | "warn" | "error";
}

export interface INotificationProps {
    navigation: NavigationScreenProp<any, INotificationParams>;
}

export interface INotificationState {
    category: {
        icon: "checkbox-marked-outline" | "alert-outline" | "close-circle-outline",
        color: "green" | "yellow" | "red",
    };
}

export default class Notification extends React.Component<INotificationProps, INotificationState> {
    private constructor(props: INotificationProps) {
        super(props);
        this.state = {
            category: {
                icon: "checkbox-marked-outline",
                color: "green",
            },
        };
    }

    public componentWillMount() {
        // Modify appearance based on props
        switch (this.props.navigation.state.params.type) {
            case "warn": {
                this.setState({
                    category :  {
                        icon: "alert-outline",
                        color: "yellow",
                    },
                });
                break;
            }
            case "error": {
                this.setState({
                    category :  {
                        icon: "close-circle-outline",
                        color: "red",
                    },
                });
                break;
            }
        }
    }

    public render() {
        // Return desired appearance
        return (
            <View style={styles.container}>
                <View style={styles.wrapperForm}>
                    <MaterialCommunityIcons
                        name={this.state.category.icon}
                        color={this.state.category.color}
                        size={32} />
                        <Text style={styles.heading}>{this.props.navigation.state.params.heading}</Text>
                    </View>
                <Text style={styles.label}>{this.props.navigation.state.params.message}</Text>
                <TouchableHighlight style={styles.touchable} onPress={() => this.handlePress()}>
                    <Text style={styles.button}>Dismiss</Text>
                </TouchableHighlight>
            </View>
        );
    }

    private handlePress() {
        this.props.navigation.navigate("main");
    }
}
