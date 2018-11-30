import * as React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
// Images
import Icon from "./images/Logo.png";
import Splash from "./images/background.jpg";
// Styles
import styles from "./styles";

const Logo = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={Splash} style={styles.imageContainer} resizeMode="cover">
                <Image resizeMode="contain" style={styles.image} source={Icon} />
                <Text style={styles.text}>
                    Karachi Registry{"\n"}for{"\n"}Drug Induced Liver Injury
                </Text>
            </ImageBackground>
        </View>
    );
};

export default Logo;
