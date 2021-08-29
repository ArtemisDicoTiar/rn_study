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
            {/* flex만을 사용하게 되면 어떤 기기를 적용해도 기대한 비율대로 들어가게 된다. */}
            <Box style={{backgroundColor: 'red', flex: 1}}/>
            <Box style={{backgroundColor: 'green', flex: 8}}/>
            <Box style={{backgroundColor: 'blue', flex: 1}}/>
            {/* justifyContent는 정렬방향과 동일, alignItems는 수직. */}
            {/* justifyContent:
            flex-start: 시작에 정렬,
            flex-end: 끝에 정렬,
            center: 중앙 정렬,
            space-between: 각 컴포넌트 사이의 공간을 동일하게 유지,
            space-around: 각 컴포넌트 그리고 그 주변 공간까지 동일하게 유지,
            space-evenly: 각 컴포넌트 사이 + 시작 과 끝 컴포넌트 앞뒤로의 공간까지를 동일하게 유지 */}
            {/* alignItems:
            flex-start: 시작에 맞춰 정렬
            flex-end: 끝에 맞춰 정렬
            center: 중앙 정렬
            stretch: 컴포넌트를 늘려 위아래(좌우)를 맞춤
            baseline: 텍스트 베이스라인에 맞춰 정렬
            */}

        </View>
    );
}

