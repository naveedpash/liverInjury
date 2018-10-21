import { StyleSheet, Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const styles = StyleSheet.create({
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    image: {
        width: imageWidth / 2,
    },
    text: {
        fontWeight: '600',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        color: '#FFF',
    },
})

export default styles;
