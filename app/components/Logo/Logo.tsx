import * as React from "react";
import { View, Image, ImageBackground, Text } from "react-native";
//Images
import Splash from "./images/splash.png";
import Icon from "./images/icon.png";
//Styles
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
    )
};

export default Logo;
