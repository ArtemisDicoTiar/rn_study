import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from "./ByButton";

export default function App() {
    const [addition, setAddition] = useState(0)
    const [multiple, setMultiple] = useState(1)
    return (
        <View style={styles.container}>

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
});
