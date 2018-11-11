import { StyleSheet } from "react-native";

const INPUT_HEIGHT: number = 48;
const BORDER_RADIUS: number = 4;

const styles = StyleSheet.create({
    // Heading for each section
    // Field labels are next largest item
    // Field sublablels are smallest but readable items
    // side by side Orientation of non multiline TextInputs with
    //      their labels
    //  Subtle border between fields in same section
    //  Accordion border between sections
    container: {
        alignItems: "stretch",
        paddingHorizontal: 15,
    },
    heading: {
        color: "#785537",
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: -0.5,
        margin: 15,
        textAlign: "center",
    },
    helpText: {
        color: "#123456",
        fontSize: 15,
        fontWeight: "400",
        height: INPUT_HEIGHT,
        justifyContent: "center",
        letterSpacing: -0.5,
        textAlign: "center",
    },
    input: {
        alignItems: "flex-end",
        color: "#797979",
        flex: 0.5,
        fontSize: 18,
        height: INPUT_HEIGHT,
        justifyContent: "center",
    },
    label: {
        alignItems: "flex-start",
        alignContent: "center",
        color: "#785537",
        flex: 0.5,
        fontSize: 20,
        fontWeight: "500",
        height: INPUT_HEIGHT,
        justifyContent: "center",
        letterSpacing: -0.5,
        marginRight: 10,
    },
    picker: {
        flex: 0.5,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    wrapper: {
        flexDirection: "row",
        paddingVertical: 11,
    },
});

export default styles;
