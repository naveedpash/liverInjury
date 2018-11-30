import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        alignSelf: "center",
        color: "white",
        textAlign: "center",
    },
    container: {
        backgroundColor: "black",
        height: "100%",
        justifyContent: "center",
    },
    heading: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
    },
    label: {
        color: "#ffffff",
        flex: 0.5,
        fontSize: 16,
        letterSpacing: -0.5,
        marginHorizontal: 10,
        textAlign: "center",
        textAlignVertical: "center",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
        letterSpacing: -0.5,
        textAlign: "center",
    },
    touchable: {
        alignItems: "center",
        backgroundColor: "#910505",
        height: 40,
        justifyContent: "center",
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
})
