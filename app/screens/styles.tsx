import { Dimensions, StatusBar, StyleSheet } from "react-native";
import colors from "../config/colors";

const INPUT_HEIGHT: number = 48;
const BORDER_RADIUS: number = 9;
const TOUCHABLE_HEIGHT: number = Dimensions.get("window").width / 10;
const LOGO_HEIGHT: number = Dimensions.get("window").height / 8;

const styles = StyleSheet.create({
    // Heading for each section
    // Field labels are next largest item
    // Field sublablels are smallest but readable items
    // side by side Orientation of non multiline TextInputs with
    //      their labels
    //  Subtle border between fields in same section
    //  Accordion border between sections
    button: {
        margin: 20,
        padding: 5,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "200",
        height: INPUT_HEIGHT,
        justifyContent: "center",
        letterSpacing: -0.5,
        marginLeft: 10,
        paddingVertical: 5,
        textAlign: "center",
        textAlignVertical: "center",
        textShadowColor: "black",
        textShadowOffset: {width: 5, height: 5},
        textShadowRadius: 5,
    },
    container: {
        flexDirection: "column",
        height: "100%",
        marginTop: StatusBar.currentHeight,
        paddingTop: 5,
    },
    containerMenu: {
        flex: 3,
        paddingHorizontal: 15,
        paddingVertical: TOUCHABLE_HEIGHT * 2,
        alignSelf: "center",
        justifyContent: "space-around",
    },
    heading: {
        color: colors.darkorange,
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
        marginHorizontal: 10,
        textAlign: "right",
    },
    inputForm: {
        flex: 1,
     // fontSize: 16,
     // height: INPUT_HEIGHT,
    },
    label: {
        color: "#ffffff",
        flex: 0.5,
        fontSize: 16,
        letterSpacing: -0.5,
        marginRight: 10,
        textAlign: "left",
        textAlignVertical: "center",
    },
    touchable: {
        alignItems: "center",
        backgroundColor: "#910505",
        borderRadius: BORDER_RADIUS,
        flexDirection: "row",
        height: TOUCHABLE_HEIGHT,
        justifyContent: "flex-start",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 15},
        shadowRadius: 5,
        elevation: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    wrapper: {
        alignContent: "space-around",
        alignItems: "stretch",
        justifyContent: "space-evenly",
        flexDirection: "row",
        padding: 11,
    },
    wrapperForm: {
        alignContent: "stretch",
        flexDirection: "row",
        padding: 11,
    },
});

export default styles;
