import * as React from "react";
import { Image, ImageBackground, View } from "react-native";
import { Card, Subheading, Surface, Text } from "react-native-paper";
// Images
import Splash from "./images/background.jpg";
import Icon from "./images/finalLogo.png";
// Styles
import styles from "./styles";

export interface ILogoProps {
    portrait: boolean;
}

const Logo: React.SFC<ILogoProps> = (props: ILogoProps = {portrait: true}) => {
    return (
        <Surface style={props.portrait ? styles.containerPortrait : styles.container}>
            <Image resizeMode="contain" style={props.portrait ? styles.imagePortrait : styles.image} source={Icon} />
            <Subheading style={props.portrait ? styles.textPortrait : styles.text}>
                Registry for{"\n"}Drug Induced Liver Injury
            </Subheading>
        </Surface>
    );
};

export default Logo;
