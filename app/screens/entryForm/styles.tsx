import { Dimensions, StyleSheet } from "react-native";

const INPUT_HEIGHT: number = 36;
const BORDER_RADIUS: number = 9;

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
    },
    container: {
        margin: 15,
        width: Dimensions.get("window").width - 30,
        maxHeight: Dimensions.get("window").height * 3/4,
        overflow: "scroll",
    },
    contentContainer: {
        marginVertical: 15,
        overflow: "hidden",
    },
    helpText: {
        textAlign: "center",
    },
    input: {
        flex: 1,
        textAlign: "right",
    },
    inputText: {
        flex: 1,
        height: INPUT_HEIGHT * 2,
    },
    picker: {
        color: "#910505",
        flex: 1,
        height: INPUT_HEIGHT,
    },
    wrapper: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    wrapperForm: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
});

export default styles;
