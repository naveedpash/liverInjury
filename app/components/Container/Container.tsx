import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View } from 'react-native';
//Styles
import styles from './styles';


const Container = ({children}: {children:any}) => {
    return (
        <View style={styles.container}> 
            {children} 
        </View>
    )
};

Container.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};

export default Container;
