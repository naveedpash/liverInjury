import * as React from "react";
import { Button, Picker, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { DateEntry } from "../../components/DateEntry";
// styles
import styles from "./styles";

export interface IHistoryScreenProps {
    navigation: NavigationScreenProp<any, any>;
};

export default class historyEntry extends React.Component<IHistoryScreenProps, object> {
    render() {
    {/* Patient History */ }
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Onset</Text>
                        <DateEntry />
                    </View>
                    <Text>Date of Onset of Symptoms</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Nausea</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complaining of nausea on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Vomiting</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complain of vomiting on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Anorexia</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complain of anorexia on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Abdominal Pain</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complain of abdominal pain on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Dark Urine</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complain of dark urine on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Pruritis</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complain of pruritis on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Rash</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complain of rash on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Fever</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complaining of fever (> 38C) on initial presentation?</Text>
                </View>
                <View>
                    <View style={styles.wrapper}>
                        <Text>Icteric</Text>
                        <Picker>
                            <Picker.Item label="No" value={0}/>
                            <Picker.Item label="Yes" value={1}/>
                        </Picker>
                    </View>
                    <Text>Is the patient complaining of jaundice on initial presentation?</Text>
                </View>
                <Button title="Next"
                        color="black"
                        onPress={() => this.props.navigation.navigate('exam')}
                />
            </View>
        );
    };
};
