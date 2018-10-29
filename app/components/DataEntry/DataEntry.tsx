// imports
import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
// styles
import styles from "./styles";

interface IProps {
    label: string;
    helptext?: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "visible-password" | "ascii-capable" |
        "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search"
        | undefined;
    picker?: boolean;
}

const DataEntry = ({label, helptext, keyboardType = "default", picker = false}: IProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.label}>{label}</Text>
                if (picker) {
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                } else {
                    <TextInput style={styles.input} keyboardType={keyboardType}/>
                }
            </View>
            if (this.props.helptext) {
                <View>
                    <Text style={styles.helpText}>{helptext}</Text>
                </View>
            }
        </View>
    );
};

export default DataEntry;
