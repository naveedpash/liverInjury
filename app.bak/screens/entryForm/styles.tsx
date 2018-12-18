import { Dimensions, StyleSheet } from "react-native";

const INPUT_HEIGHT: number = 36;
const BORDER_RADIUS: number = 9;
const TOUCHABLE_WIDTH: number = Dimensions.get("window").width / 3;

const styles = StyleSheet.create({
    // Heading for each section
    // Field labels are next largest item
    // Field sublablels are smallest but readable items
    // side by side Orientation of non multiline TextInputs with
    //      their labels
    //  Subtle border between fields in same section
    //  Accordion border between sections
    button: {
        marginTop: 20,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "500",
        height: INPUT_HEIGHT,
        justifyContent: "center",
        letterSpacing: -0.5,
        textAlign: "center",
        textShadowColor: "black",
        textShadowOffset: {width: 5, height: 5},
        textShadowRadius: 5,
    },
    container: {
        alignItems: "stretch",
        backgroundColor: "#31aa80",
        height: "100%",
        padding: 15,
    },
    heading: {
        color: "#910505",
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: -0.5,
        margin: 15,
        textAlign: "center",
    },
    helpText: {
        color: "black",
        fontSize: 14,
        fontWeight: "400",
        justifyContent: "center",
        letterSpacing: -0.5,
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        color: "#910505",
        flex: 1,
        fontSize: 16,
        height: INPUT_HEIGHT,
        textAlign: "right",
    },
    inputText: {
        color: "#910505",
        flex: 1,
        fontSize: 16,
        height: INPUT_HEIGHT,
    },
    inputForm: {
        alignSelf: "baseline",
        color: "#910505",
        flex: 0.4,
        fontSize: 18,
        height: INPUT_HEIGHT,
        textAlign: "right",
    },
    label: {
        color: "#ffffff",
        flex: 0.5,
        fontSize: 18,
        letterSpacing: -0.5,
        marginRight: 10,
        textAlign: "left",
        textAlignVertical: "center",
    },
    picker: {
        color: "#910505",
        flex: 1,
        height: INPUT_HEIGHT,
    },
    touchable: {
        alignItems: "center",
        backgroundColor: "#910505",
        borderRadius: BORDER_RADIUS,
        height: TOUCHABLE_WIDTH,
        justifyContent: "center",
        width: TOUCHABLE_WIDTH,
        shadowColor: "black",
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 5,
        elevation: 15,
    },
    wrapper: {
        alignContent: "space-around",
        alignItems: "stretch",
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    wrapperForm: {
        alignContent: "stretch",
        flexDirection: "row",
    },
});

export default styles;
