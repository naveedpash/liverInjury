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
            {/* Patient History */ }
            <View>
                <View>
                    <Text>Onset</Text>
                    <Text>Date of Onset of Symptoms</Text>
                    <TextInput></TextInput>
                </View>
                <View>
                    <Text>Nausea</Text>
                    <Text>Is the patient complain of nausea on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Vomiting</Text>
                    <Text>Is the patient complain of vomiting on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Anorexia</Text>
                    <Text>Is the patient complain of anorexia on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Abdominal Pain</Text>
                    <Text>Is the patient complain of abdominal pain on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Dark Urine</Text>
                    <Text>Is the patient complain of dark urine on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Pruritis</Text>
                    <Text>Is the patient complain of pruritis on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Rash</Text>
                    <Text>Is the patient complain of rash on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Fever</Text>
                    <Text>Is the patient complain of fever (> 38C) on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Icteric</Text>
                    <Text>Is the patient complain of jaundice on initial presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
            </View>
            {/* Patient Physical Examination */}
            <View>
                <View>
                    <Text>Rash</Text>
                    <Text>Is the patient presenting with rash on initial examination?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Fever</Text>
                    <Text>Is the patient presenting with fever (> 38C) on initial examination?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Icteric</Text>
                    <Text>Is the patient presenting with jaundice on initial examination?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Hepatic Tenderness</Text>
                    <Text>Is the patient presenting with hepatic tenderness on initial examination?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Stigmata of Hepatic Failure</Text>
                    <Text>Is the patient presenting with stigmata of hepatic failure on initial examination?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Septic</Text>
                    <Text>Is the patient septic  on initial examination?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Hypotension</Text>
                    <Text>Is the patient hypotensive on initial examination?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
            </View>
            {/* Past Medical History */}
            <View>
                <View>
                    <Text>Heart Failure</Text>
                    <Text>Is the patient known to have heart failure?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Total Parenteral Nutrition</Text>
                    <Text>Is the patient known to have received total parenteral nutrition within the past 3 months?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Hepatitis B</Text>
                    <Text>Is the patient known to have active hepatitis B at the time of presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Hepatitis C</Text>
                    <Text>Is the patient known to have active hepatitis C at the time of presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>Alcohol Abuse</Text>
                    <Text>Is the patient known to abuse alcohol as per CAGE criteria?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
            </View>
            {/* Past Drug History */}
            <View>
                <View>
                    <Text>Past Reaction to Suspected Drug</Text>
                    <Text>Has the patient previously taken the drug suspected to have caused the current episode of liver injury?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>What medications has the patient been taking over the past 3 months?</Text>
                    <Text>Please type the drug, its dose and dosage unit and duration the patient has been taking the drug</Text>
                    {/* Button to add more row */}
                    <TextInput multiline={true} />
                </View>
            </View>
            {/* Laboratory Tests */}
            <View>
                <View>
                    <Text>Please enter the results of the following laboratory tests done on initial presentation</Text>
                </View>
                <View>
                    <Text>Date</Text>
                    <Text>What date were these labs drawn?</Text>
                    {/* Date picker */}
                </View>
                <View>
                    <Text>Bilirubin (mg/dL)</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>AST (mg/dL)</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>ALT (mg/dL)</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Alkaline Phosphatase (mg/dL)</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Anti-HAV IgM</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Anti-HBc antibody</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>HBsAg</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Anti-HCV antibody</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>HCV RNA</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>ANA</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Biopsy Report</Text>
                    {/* Camera Input */}
                </View>
            </View>
            {/* Prior Lab Tests */}
            <View>
                <View>
                    <Text>Please enter any of the following laboratory reports that are available from prior to the current episode of suspected drug induced liver injury</Text> 
                </View>
                <View>
                    <Text>AST</Text> 
                    <TextInput />
                    {/* Date Picker */}
                </View>
                <View>
                    <Text>ALT</Text> 
                    <TextInput />
                    {/* Date Picker */}
                </View>
                <View>
                    <Text>Alkaline Phosphatase</Text> 
                    <TextInput />
                    {/* Date Picker */}
                </View>
                <View>
                    <Text>INR</Text> 
                    <TextInput />
                    {/* Date Picker */}
                </View>
            </View>
        </View>
    )
};

export default Entry;
