import { StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        elevation: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        margin: 10,
        padding: 5,
    },
    image: {
        flex: 1,
    },
    text: {
        flex: 2,
        fontWeight: "500",
        fontSize: 20,
        letterSpacing: -0.5,
        color: colors.green,
        textAlign: "center",
        textAlignVertical: "center",
    },
    containerPortrait: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
//      height: "40%",
        paddingTop: StatusBar.currentHeight! + 10,
    },
    imagePortrait: {
        flex: 2,
    },
    textPortrait: {
        flex: 1,
        fontWeight: "500",
        fontSize: 20,
        letterSpacing: -0.5,
        color: colors.green,
        textAlign: "center",
        textAlignVertical: "center",
    },
});

export default styles;
