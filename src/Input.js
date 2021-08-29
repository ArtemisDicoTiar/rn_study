import React, {useState} from 'react';
import styled from "styled-components/native";
import {StyleSheet} from "react-native-web";

// 해당 컴포넌트의 attrs도 설정가능.
const StyledInput = styled.TextInput.attrs(({placeholder, theme}) => ({
    placeholder: placeholder || "ENTER a TEXT",
    placeholderTextColor: theme.inputColor,
}))`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({theme}) => theme.inputBorder};
`



const Input = ({placeholder}) => {
    const [text, setText] = useState('');
    return (
        <StyledInput
            onChageText={text => setText(text)}
            placeholder={placeholder}
            text={text}/>
    )
}

export default Input
