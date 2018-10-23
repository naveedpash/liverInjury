import * as React from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
//styles
//import styles from './styles';

// TODO: Implement Accordion on each section; Green tick vs Red cross to indicate remaining fields
const Entry = () => {
    return (
        <View> 
        {/* Patient Demographics */}
            <View> 
                <View>
                    <Text>Unique ID</Text>
                    <Text>Unique ID for Registering the Patient</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Name</Text>
                    <Text>Name Patient</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Age</Text>
                    <Text>Age of Patient at the time of Registration</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Gender</Text>
                    <Text>Gender of Patient</Text>
                    <Picker>
                        <Picker.Item label="Male" value={0} />
                        <Picker.Item label="female" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Consent</Text>
                    <Text>Has the patient given consent to be registered?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                {/* TODO: Automatically pull entrant name from stored ID */}
                    <Text>Entrant</Text>
                    <Text>Name of Physician Registering Patient</Text>
                    <TextInput />
                </View>
                <View>
                {/* TODO: Android and iOS have separate DatePickers; need to implement scripts to render accordingly */}
                    <Text>Entry Date</Text>
                    <Text>Date of Registering Patient</Text>
                </View>
            </View>
            {/* DILI Episode */}
            <View>
                <View>
                    <Text>Drug</Text>
                    <Text>Drug Suspected to have Caused DILI</Text>
                    {/* TODO: implement RxNorm coding system */}
                    <TextInput />
                </View>
                <View>
                    <Text>Drug Dose</Text>
                    <Text>Dose at which Suspected Drug was taken by the patient</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Drug Dose Unit</Text>
                    <Text>Unit of Dose of Suspected Drug</Text>
                    <Picker>
                        <Picker.Item label="Milligrams" value="mg" />
                        <Picker.Item label="Grams" value="g" />
                        <Picker.Item label="Milliliters" value="mL" />
                        <Picker.Item label="Micrograms" value="mcg" />
                    </Picker>
                </View>
                <View>
                    <Text>Indication</Text>
                    <Text>Indication for which suspected drug was originally prescribed</Text>
                    <TextInput multiline={true} />
                </View>
                <View>
                    <Text>Re-Challenged?</Text>
                    <Text>Was the patient re-challenged with the drug suspected to have caused liver injury?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Result of Re-Challenge</Text>
                    <Text>What was the result of the Re-challenge?</Text>
                    <TextInput multiline={true} />
                </View>
            </View>
        </View>
    )
};

export default Entry;
