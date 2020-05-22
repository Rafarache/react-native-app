import React from 'react';
import { View } from 'react-native';

const Separator = props => {
    return (
        <View
            style={{
            height: 1,
            width: "100%",
            backgroundColor: "#ffffff",
            marginVertical: 10,
            borderRadius: 3,
            }}
        />
    );        
}


export default Separator;