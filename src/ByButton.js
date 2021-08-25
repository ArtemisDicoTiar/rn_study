import React from 'react';
import {TouchableOpacity, View, Text} from "react-native";

const MyButton = () => {
    return (
        // {/*버튼을 정확히 누르지 않아도 누른 것처럼 하기 위해서는 버튼의 스타일에 margin을 적당히 주거나*/}
        //      마진은 공간을 차지함. 스타일이기 때문에 CSS처럼
        // TochableOpacity에 hitSlop 파라미터에 {bottom: 10, top: 10, left: 10, right: 10}를 넘겨주면 된다.
        //      hitSlop은 동작 자체를 사용자의 터치 좌표를 받고 해당 좌표가 지정한 범위 안이면 맞다고 처리하는 것 같다
        //      그렇기 때문에 직접적인(물리적인) 공간을 차지하지 않는다.
        // pressRetentionOffset은 버튼을 누르고 파라미터로 넘겨준 범위만큼을 벗어나게 되면 선택이 취소된다.
        <TouchableOpacity onPress={() => alert('Clicked!')}
                          hitSlop={{bottom: 10, top: 10, left: 10, right: 10}}
                          pressRetentionOffset={{bottom: 10, top: 10, left: 10, right: 10}}
        >
            <View style={{backgroundColor: 'red', padding: 10}}>

                <Text style={{fontSize: 20, color: 'white'}}>MyButton</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MyButton
