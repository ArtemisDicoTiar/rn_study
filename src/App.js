import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import MyButton from "./MyButton";
import {styles} from "./style";
import {Box} from "./Box";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {/* flex 없이 작성하면 기기가 변동되면 기대하는 비율로 나오지 않는다. */}
            <Box style={{backgroundColor: 'red', height: 100}}/>
            <Box style={{backgroundColor: 'green', height: 600}}/>
            <Box style={{backgroundColor: 'blue', height: 100}}/>
        </View>
    );
}

