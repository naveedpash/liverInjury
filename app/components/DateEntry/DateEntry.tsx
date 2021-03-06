import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import * as React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { validateDate } from "../../config/validation";
// styles
import styles from "./styles";

interface IDateEntryProps {
    dateHandler: (date: moment.Moment) => any;
    validateAgainst: string;
    validationMessage: string;
}

interface IDateEntryState {
    isDateTimePickerVisible: boolean;
    date: string;
}

class DateEntry extends React.Component<IDateEntryProps, IDateEntryState> {
    constructor(props: IDateEntryProps) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: "Pick a Date",
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.wrapper} onPress={this.showDateTimePicker}>
                    <Text style={styles.text}>{this.state.date}</Text>
                    <FontAwesome name="calendar" color="black" size={18} />
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
        if (validateDate(moment(date), this.props.validateAgainst)) {
            Alert.alert(this.props.validationMessage);
            return;
        } else {
            this.setState({date: moment(date).format("YYYY-MM-DD")});
            this.props.dateHandler(moment(date));
        };
    }
}

export default DateEntry;
