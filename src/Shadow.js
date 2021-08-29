import React from 'react';
import {StatusBar} from "expo-status-bar";
import {Platform, View, StyleSheet, Text} from "react-native";

const Shadow = () => {
    return <View style={styles.shadow}>
        <Text>{Platform.OS}</Text>
    </View>
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: '#ffffff',
        width: 200,
        height: 200,

        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,

            },
            android: {
                elevation: 20,
            }
        })


    //    엘리베이션은 안드로이드에서 적용,
    //    shadow는 ios에 적용.
    }
})

export default Shadow;
