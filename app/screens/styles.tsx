import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Heading for each section
    // Field labels are next largest item
    // Field sublablels are smallest but readable items
    // side by side Orientation of non multiline TextInputs with 
    //      their labels
    //  Subtle border between fields in same section
    //  Accordion border between sections
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    heading: {
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: -0.5,
        margin: 15,
        color: '#785537',
        textAlign: 'center',
    },
    label: {
        fontSize: 20,
        fontWeight: "500",
        letterSpacing: -0.5,
        margin: 10,
        color: '#785537',
    },
})

export default styles;
