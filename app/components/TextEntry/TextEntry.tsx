// imports
import * as PropTypes from "prop-types";
import * as React from "react";
import { Text, TextInput, View } from "react-native";
// styles
import styles from "./styles";

const TextEntry = (label: string, helptext: string) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input} />
            </View>
            <View>
                <Text style={styles.helpText}>{helptext}</Text>
            </View>
        </View>
    );
};

TextEntry.propTypes = {
    helptext: PropTypes.string,
    label: PropTypes.string,
};

export default TextEntry;
