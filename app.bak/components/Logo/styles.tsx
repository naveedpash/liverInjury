import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#910505",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 5,
    },
    image: {
        flex: 1,
    },
    text: {
        flex: 2,
        fontWeight: "500",
        fontSize: 20,
        letterSpacing: -0.5,
        color: "#FFFFFF",
        textAlign: "center",
        textAlignVertical: "center",
        textShadowColor: "black",
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 1,
    },
    containerPortrait: {
        alignItems: "center",
        backgroundColor: "#910505",
        flex: 1.5,
        flexDirection: "column",
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
        color: "#FFFFFF",
        textAlign: "center",
        textAlignVertical: "center",
        textShadowColor: "black",
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 1,
    },
});

export default styles;
