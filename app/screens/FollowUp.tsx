import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
import { TextEntry } from "../components/TextEntry";
// styles
import styles from "./styles";

const FollowUp = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>Follow Up LFTs</Text>
                <Text style={styles.helpText}>Please enter the laboratory values of the registered patient suspected to
                 have drug induced liver injury</Text>
            </View>
            <TextEntry>
            </TextEntry>
//          <View>
//              <View style={styles.wrapper}>
//                  <Text style={styles.label}>NIC Number</Text>
//                  {/* TODO: implement fuzzy search */}
//                  <TextInput style={styles.input} />
//              </View>
//              <Text style={styles.helpText}>Please enter the National Identity Card number of the patient</Text>
//          </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Bilirubin (mg/dL)</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>AST (mg/dL)</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>ALT (mg/dL)</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Alkaline Phosphatase (mg/dL)</Text>
                <TextInput style={styles.input} />
            </View>
        </View>
    );
};

export default FollowUp;
