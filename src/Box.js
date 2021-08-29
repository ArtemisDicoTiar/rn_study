import React from 'react';
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";

export const Box = ({ style }) => {
    return <View style={[{borderWidth: 2, width: '100%'}, style]}></View>
}
