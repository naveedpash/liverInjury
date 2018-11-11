import * as React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
// Images
import Icon from "./images/icon.png";
import Splash from "./images/splash.png";
// Styles
import styles from "./styles";

const Logo = () => {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain"
                             style={styles.containerImage}
                             source={Splash} >
                 <Image resizeMode="contain"
                        style={styles.image}
                        source={Icon} />
            </ImageBackground>
            <Text style={styles.text}>
                Karachi Registry for Drug Induced Liver Injury
            </Text>
        </View>
    );
};

export default Logo;
