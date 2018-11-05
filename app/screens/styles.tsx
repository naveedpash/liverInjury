import { Dimensions, StyleSheet } from "react-native";

const INPUT_HEIGHT: number = 48;
const BORDER_RADIUS: number = 9;
const TOUCHABLE_WIDTH: number = Dimensions.get("window").width/3;

const styles = StyleSheet.create({
    // Heading for each section
    // Field labels are next largest item
    // Field sublablels are smallest but readable items
    // side by side Orientation of non multiline TextInputs with
    //      their labels
    //  Subtle border between fields in same section
    //  Accordion border between sections
    buttonText: {
        color: "blue",
        fontSize: 15,
        fontWeight: "500",
        height: INPUT_HEIGHT,
        justifyContent: "center",
        letterSpacing: -0.5,
        textAlign: "center",
    },
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
        color: "#797979",
        flex: 1,
        fontSize: 18,
        height: INPUT_HEIGHT,
        justifyContent: "flex-end",
    },
    label: {
        color: "#785537",
        fontSize: 20,
        fontWeight: "500",
        height: INPUT_HEIGHT,
        justifyContent: "flex-start",
        letterSpacing: -0.5,
        marginRight: 10,
    },
    touchable: {
        alignItems: "center",
        backgroundColor: "red",
        borderRadius: BORDER_RADIUS,
        height: TOUCHABLE_WIDTH,
        justifyContent: "center",
        width: TOUCHABLE_WIDTH,
    },
    wrapper: {
        alignContent: "space-around",
        justifyContent: "space-evenly",
        flexDirection: "row",
        padding: 11,
    },
});

export default styles;
