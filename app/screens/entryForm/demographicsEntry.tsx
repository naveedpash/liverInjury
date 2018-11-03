import moment from "moment";
import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Add border between each entry element
const Entry = () => {
    return (
        <View style={styles.container}>
        {/* Patient Demographics */}
            <View>
                <View>
                {/* TODO: Android and iOS have separate DatePickers; need to implement scripts to render accordingly */}
                    <Text>{moment(today).format("DD/MM/YYYY")}</Text>
                </View>
                <View>
                {/* TODO: Automatically pull entrant name from stored ID */}
                    <Text>Entrant</Text>
                    <TextInput style={styles.input} />
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>NIC Number</Text>
                        <TextInput />
                    </View>
                    <Text style={styles.helpText}>Enter the National ID Card number of the patient</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput />
                    </View>
                    <Text style={styles.helpText}>Name of the Patient</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput />
                    </View>
                    <Text style={styles.helpText}>Age of the Patient at the time of Registration</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Gender</Text>
                    <Text>Gender of Patient</Text>
                    <Picker>
                        <Picker.Item label="Male" value={0} />
                        <Picker.Item label="Female" value={1} />
                    </Picker>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text style={styles.label}>Consent</Text>
                        <Picker>
                            <Picker.Item label="No" value={0} />
                            <Picker.Item label="Yes" value={1} />
                        </Picker>
                    </View>
                    <Text style={styles.helpText}>Has the patient given consent to be registered?</Text>
                </View>
            </View>
        </View>
    );
};

export default Entry;
