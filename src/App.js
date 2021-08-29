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
            {/* flex를 사용하면 해당 공간 외 px로 지정된 공간을 먼저 할당 그리고 나머지 공간을 flex로 들어간다. */}
            <Box style={{backgroundColor: 'red', height: 100}}/>
            <Box style={{backgroundColor: 'green', flex: 1}}/>
            <Box style={{backgroundColor: 'blue', height: 100}}/>
        </View>
    );
}

