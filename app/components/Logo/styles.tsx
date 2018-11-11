import { Dimensions, StyleSheet } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 15,
    },
    containerImage: {
        alignItems: "center",
        justifyContent: "center",
        width: imageWidth,
        height: imageWidth,
    },
    image: {
        width: imageWidth / 2,
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
