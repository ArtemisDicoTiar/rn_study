import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import MyButton from "./MyButton";
import {styles} from "./style";
import {Box} from "./Box";
import Shadow from "./Shadow";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Shadow></Shadow>

        </View>
    );
}

