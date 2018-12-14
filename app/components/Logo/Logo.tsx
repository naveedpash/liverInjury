import * as React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
// Images
import Splash from "./images/background.jpg";
import Icon from "./images/Logo.png";
// Styles
import styles from "./styles";

export interface ILogoProps {
    portrait: boolean;
}

const Logo: React.SFC<ILogoProps> = (props: ILogoProps = {portrait: true}) => {
    return (
        <View style={props.portrait ? styles.containerPortrait : styles.container}>
            <Image resizeMode="contain" style={props.portrait ? styles.imagePortrait : styles.image} source={Icon} />
            <Text style={props.portrait ? styles.textPortrait : styles.text}>
                Karachi Registry for{"\n"}Drug Induced Liver Injury
            </Text>
        </View>
    );
};

export default Logo;
