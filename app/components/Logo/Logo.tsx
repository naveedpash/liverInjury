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
        <View style={props.portrait ? styles.container : styles.containerPortrait}>
            <Image resizeMode="contain" style={props.portrait ? styles.image : styles.imagePortrait} source={Icon} />
            <Text style={props.portrait ? styles.text : styles.textPortrait}>
                Karachi Registry for{"\n"}Drug Induced Liver Injury
            </Text>
        </View>
    );
};

export default Logo;
