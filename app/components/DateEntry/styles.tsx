import { Dimensions, StyleSheet } from "react-native";

const TEXT_WIDTH = Dimensions.get("window").width / 4;

export default StyleSheet.create({
    container: {
//      alignItems: "stretch",
//      flex: 0.5,
        alignContent: "space-between",
        justifyContent: "center",
        paddingLeft: 5,
    },
    text: {
        marginRight: 1,
        paddingRight: 5,
    },
    wrapper: {
        alignItems: "center",
        flexDirection: "row",
    },
});
