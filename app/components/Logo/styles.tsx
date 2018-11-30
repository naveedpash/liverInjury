import { Dimensions, StyleSheet } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;
const imageHeight = Dimensions.get("window").height / 4;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: imageHeight,
    },
    imageContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: imageHeight,
    },
    image: {
        width: imageWidth,
    },
    text: {
        fontWeight: "500",
        fontSize: 20,
        letterSpacing: -0.5,
        marginTop: 15,
        color: "#785537",
        textAlign: "center",
    },

});
export default styles;
