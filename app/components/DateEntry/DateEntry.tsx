import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
// styles
import styles from "./styles";

//  interface IDateEntryProps {
//      handler: (date: Date) => void;
//  }

interface IDateEntryState {
    isDateTimePickerVisible: boolean;
    date: Date;
}

class DateEntry extends React.Component<any, IDateEntryState> {
    constructor(props: any) {
        super(props);
        this.setState({isDateTimePickerVisible: false});

    }

    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.wrapper} onPress={this.showDateTimePicker}>
                    <Text>{moment(this.state.date).format("DD/MM/YYYY")}</Text>
                    <FontAwesome name="calendar" color="black" size={38} />
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    mode="date"
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker} />
            </View>
        );
    }

    private showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    private hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    private handleDatePicked = (date: Date) => {
        this.hideDateTimePicker();
        // this.props.handler(date);
    }

}

export default DateEntry;
