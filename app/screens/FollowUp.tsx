import * as React from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
//styles
import styles from './styles';

const FollowUp = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Follow Up LFTs</Text>
                <Text>Please enter the laboratory values of the registered patient suspected to have drug induced liver injury</Text>
            </View>
            <View>
                <Text style={styles.label}>Unique ID</Text>
                <Text>Please enter the unique ID the patient was given at the time of registration</Text>
                {/* TODO: implement fuzzy search */}
                <TextInput />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Bilirubin (mg/dL)</Text>
                <TextInput />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>AST (mg/dL)</Text>
                <TextInput />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>ALT (mg/dL)</Text>
                <TextInput />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Alkaline Phosphatase (mg/dL)</Text>
                <TextInput />
            </View>
        </View>
    )
};

export default FollowUp;
