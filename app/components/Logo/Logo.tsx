import * as React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { Container } from '../Container';
//Images
import Splash from './images/splash.png';
import Icon from './images/icon.png';
//Styles
import styles from './styles';

const Logo = () => {
    return (
        <Container>
            <ImageBackground resizeMode='contain' 
                             style={styles.containerImage} 
                             source={Splash} >
                 <Image resizeMode='contain'
                        style={styles.image}
                        source={Icon} />
            </ImageBackground>
            <Text style={styles.text}>
                Cross-institutional Registry for Drug Induced Liver Injury
            </Text>
        </Container>
    )
};

export default Logo;
