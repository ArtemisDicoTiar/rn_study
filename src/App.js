import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from "./ByButton";
import {TextInput} from "react-native";

export default function App() {
    const [addition, setAddition] = useState(0)
    const [multiple, setMultiple] = useState(1)
    return (
        <View style={styles.container}>
            {/* 아래처럼 스타일을 배열로 여러개 적용시 중복되는 값이 있다면 뒤에 있는 친구가 앞에 있는 변수값을 오버라이트한다.*/}
            {/* 스타일 시트를 사용하지 않고 인라인으로 적어도 된다. */}
            <Text style={[styles.text, styles.errorText, {fontSize: 50}]}>React-Native Study</Text>
            <StatusBar style="auto"/>
            <Text>{addition}</Text>
            <MyButton title="add" onPress={() => setAddition(addition + 2)}/>
            <Text>{multiple}</Text>
            <MyButton title="mult" onPress={() => setMultiple(multiple * 2)}/>

            {/*이 친구의 태그 사이의 값을 이용하기 위해서는 자식 객체에서 children이라는 걸 사용해야한다.*/}
            <MyButton>Children</MyButton>
            {/*  아래 버튼을 보면 children props가 우선시 되고 있다. 당연히 앞에 먼저 썼으니.  */}
            <MyButton title="my button 3" onPress={() => alert('Clicked 3!')}>Button3</MyButton>
            {/*Default값을 사용한 친구.*/}
            <MyButton/>

            {/*default prop을 벗어나는 친구.*/}
            {/*Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `MyButton`, expected `string`.*/}
            <MyButton title={'3'}/>

            <TextInput onChangeText={text => console.log(text)}
                       // onChange={event => console.log(event.nativeEvent)}
                       style={{borderWidth:1, padding: 10, fontSize: 20}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        backgroundColor: 'black',
        color: 'red',
        fontSize: 20
    },
    errorText: {
        color: 'red',
    },
});
