import * as React from "react";
import { Picker, Text, TextInput, View } from "react-native";
import { DataEntry } from "../components/DataEntry";
// styles
import styles from "./styles";

const today: Date = new Date();

// TODO: Implement Accordion on each section; Green tick vs Red cross to indicate remaining fields
// TODO: Add border between each entry element
const Entry = () => {
    return (
        <View style={styles.container}>
        {/* Patient Demographics */}
            <View>
                <View>
                {/* TODO: Android and iOS have separate DatePickers; need to implement scripts to render accordingly */}
                    <Text>string.concat(today.getDate(),today.getMonth(),today.getFullYear())</Text>
                </View>
                <View>
                {/* TODO: Automatically pull entrant name from stored ID */}
                    <Text>Entrant</Text>
                    <TextInput style={styles.input} />
                </View>
                <DataEntry
                    label="NIC Number"
                    helptext="Enter the National ID Card number of the patient"
                />
                <DataEntry
                    label="Name"
                    helptext="Name of the Patient"
                />
                <DataEntry
                    label="Age"
                    helptext="Age of Patient at the time of Registration"
                    keyboardType="numeric"
                />
                <View style={styles.container}>
                    <Text>Gender</Text>
                    <Text>Gender of Patient</Text>
                    <Picker>
                        <Picker.Item label="Male" value={0} />
                        <Picker.Item label="female" value={1} />
                    </Picker>
                </View>
                <DataEntry
                    label="Consent"
                    helptext="Has the patient given consent to be registered?"
                    picker={true}
                />
            </View>
            {/* DILI Episode */}
            <View>
            {/* TODO: implement RxNorm coding system */}
                <DataEntry
                    label="Drug"
                    helptext="Drug suspected to have caused drug induced liver injury"
                />
                <DataEntry
                    label="Drug Dose"
                    helptext="Dose at which suspected drug was taken by the patient"
                />
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
                    <Text style={styles.label}>Indication</Text>
                    <TextInput multiline={true} />
                    <Text style={styles.helpText}>Indication for which suspected drug was originally prescribed</Text>
                </View>
                <DataEntry
                    label="Re-Challenged?"
                    helptext="Was the patient re-challenged with the drug suspected to have caused liver injury>"
                    picker={true}
                />
                <View>
                    <Text style={styles.label}>Result of Re-Challenge</Text>
                    <TextInput multiline={true} />
                    <Text style={styles.helpText}>What was the result of the Re-challenge?</Text>
                </View>
            </View>
            {/* Patient History */ }
            <View>
                <View>
                    <Text>Onset</Text>
                    <Text>Date of Onset of Symptoms</Text>
                    <TextInput></TextInput>
                </View>
                <DataEntry
                    label="Nausea"
                    helptext="Is the patient complaining of nausea on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Vomiting"
                    helptext="Is the patient complain of vomiting on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Anorexia"
                    helptext="Is the patient complain of anorexia on initial presentation?Is the patient complain of
                        vomiting on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Abdominal Pain"
                    helptext="Is the patient complain of abdominal pain on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Dark Urine"
                    helptext="Is the patient complain of dark urine on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Pruritis"
                    helptext="Is the patient complain of pruritis on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Rash"
                    helptext="Is the patient complain of rash on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Fever"
                    helptext="Is the patient complaining of fever (> 38C) on initial presentation?"
                    picker={true}
                />
                <DataEntry
                    label="Icteric"
                    helptext="Is the patient complaining of jaundice on initial presentation?"
                    picker={true}
                />
            </View>
            {/* Patient Physical Examination */}
            <View>
                <DataEntry
                    label="Rash"
                    helptext="Is the patient presenting with rash on initial examination?"
                />
                <DataEntry
                    label="Fever"
                    helptext="Is the patient presenting with fever (> 38C) on initial examination?"
                />
                <DataEntry
                    label="Icteric"
                    helptext="Is the patient presenting with jaundice on initial examination?"
                />
                <DataEntry
                    label="Hepatic Tenderness"
                    helptext="Is the patient presenting with hepatic tenderness on initial examination?"
                />
                <DataEntry
                    label="Stigmata of Hepatic Failure"
                    helptext="Is the patient presenting with stigmata of hepatic failure on initial examination?"
                />
                <DataEntry
                    label="Septic"
                    helptext="Is the patient septic  on initial examination?"
                />
                <DataEntry
                    label="Hypotension"
                    helptext="Is the patient hypotensive on initial examination?"
                />
            </View>
            {/* Past Medical History */}
            <View>
                <DataEntry
                    label="Heart Failure"
                    helptext="Is the patient known to have heart failure?"
                />
                <DataEntry
                    label="Heart Failure"
                    helptext="Is the patient known to have received total parenteral nutrition within the past 3 months?"
                />
                <DataEntry
                    label="Heart Failure"
                    helptext="Is the patient known to have active hepatitis B at the time of presentation?"
                />
                <View>
                    <Text>Hepatitis B</Text>
                    <Text>Is the patient known to have active hepatitis B at the time of presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <DataEntry
                    label="Heart Failure"
                    helptext=""
                />
                <View>
                    <Text>Hepatitis C</Text>
                    <Text>Is the patient known to have active hepatitis C at the time of presentation?</Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <DataEntry
                    label="Heart Failure"
                    helptext=""
                />
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
                    <Text>Has the patient previously taken the drug suspected to have caused the current episode of
                    liver injury?
                    </Text>
                    <Picker>
                        <Picker.Item label="No" value={0} />
                        <Picker.Item label="Yes" value={1} />
                    </Picker>
                </View>
                <View>
                    <Text>What medications has the patient been taking over the past 3 months?</Text>
                    <Text>Please type the drug, its dose and dosage unit and duration the patient
                     has been taking the drug
                    </Text>
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
                    <Text>Please enter any of the following laboratory reports that are available from prior to the
                    current episode of suspected drug induced liver injury
                    </Text>
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
    );
};

export default Entry;
