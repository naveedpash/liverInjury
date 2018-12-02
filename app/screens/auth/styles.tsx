import { Dimensions, StyleSheet } from "react-native";

const INPUT_HEIGHT: number = 48;
const BORDER_RADIUS: number = 9;
const TOUCHABLE_WIDTH: number = Dimensions.get("window").width / 3;
const imageHeight = Dimensions.get("window").height / 4;

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
        height: imageHeight * 3,
        justifyContent: "center",
        paddingHorizontal: 15,
        shadowColor: "black",
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 35},
        elevation: 3,
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
        fontSize: 15,
        fontWeight: "400",
        justifyContent: "center",
        letterSpacing: -0.5,
        textAlign: "center",
    },
    input: {
        color: "#910505",
        flex: 1,
        fontSize: 18,
        height: INPUT_HEIGHT,
        textAlign: "right",
    },
    inputForm: {
        color: "#910505",
        flex: 1,
        fontSize: 18,
        height: INPUT_HEIGHT,
    },
    label: {
        color: "#ffffff",
        flex: 0.5,
        fontSize: 20,
        letterSpacing: -0.5,
        marginRight: 10,
        textAlign: "left",
        textAlignVertical: "center",
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
        padding: 11,
    },
    wrapperForm: {
        alignContent: "stretch",
        flexDirection: "row",
        padding: 11,
    },
});

export default styles;
