import { StyleSheet } from "react-native";

const INPUT_HEIGHT: number = 48;
const BORDER_RADIUS: number = 4;

const styles = StyleSheet.create({
    container: {
        alignItems: "stretch",
        paddingHorizontal: 15,
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
    wrapper: {
        flexDirection: "row",
        paddingVertical: 11,
    },
});

export default styles;
