import * as React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
//Images
import Splash from './images/splash.png';
import Icon from './images/icon.png';
//Styles
import styles from './styles';

const Logo = () => {
    return (
        <ImageBackground resizeMode='contain' 
                         style={styles.containerImage} 
                         source={Splash} >
             <Image resizeMode='contain'
                    style={styles.image}
                    source={Icon} />
        </ImageBackground>
    )
};

export default Logo;
