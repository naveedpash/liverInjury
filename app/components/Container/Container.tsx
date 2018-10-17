import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View } from 'react-native';


const Container = ({children}: {children:any}) => {
    return (
        <View> 
            {children} 
        </View>
    )
};

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;
