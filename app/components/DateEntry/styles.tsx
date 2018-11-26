import { Dimensions, StyleSheet } from "react-native";

const TEXT_WIDTH = Dimensions.get("window").width / 4;

export default StyleSheet.create({
    container: {
        alignItems: "stretch",
        flex: 0.5,
        justifyContent: "flex-end",
    },
    text: {
        color: "#910505",
        fontSize: 16,
        borderRightColor: "#454545",
        letterSpacing: -0.5,
        marginRight: 1,
        paddingRight: 5,
        textAlign: "center",
        width: TEXT_WIDTH,
    },
    wrapper: {
        alignItems: "center",
        flexDirection: "row",
    },
});
