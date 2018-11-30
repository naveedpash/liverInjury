import * as React from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";
// styles
import styles from "./styles";

export interface ILoadingProps {
    isLoading: boolean;
}

export default class Loading extends React.Component<ILoadingProps, any> {
    private constructor(props: ILoadingProps) {
        super(props);
    }

    public render() {
        return (
            <Modal visible={this.props.isLoading}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size="large" color="black" />
                    <Text>Loading</Text>
                </View>
            </Modal>
        );
    }
}
