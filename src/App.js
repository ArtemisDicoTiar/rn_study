import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import MyButton from "./MyButton";
import {styles} from "./style";
import {Box} from "./Box";
import Shadow from "./Shadow";
import styled, {ThemeProvider} from "styled-components/native";
import {css} from "styled-components";
import Input from "./Input";
import {Switch} from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.bgColor};
    align-items: center;
    justify-content: center;
`

const cssText = css`
  font-size: 20px;
  font-weight: 600;
`

// 이렇게 CSS를 불러올수도 있고
const StyledText = styled.Text`
  ${cssText};
  color: blue;
`

// 이렇게 각 스타일을 상속받을 수도 있다.
const ErrorText = styled(StyledText)`
  color: aquamarine;
`

const StyledButton = styled.Button``

const lightTheme = {
    inputColor: '#111111',
    inputBorder: '#111111',
    bgColor: '#e3e3e3',
}

const darkTheme = {
    inputColor: '#e3e3e3',
    inputBorder: '#e3e3e3',
    bgColor: '#111111',
}

export default function App() {
    const [isLight, toggleTheme] = useState(true);
    return (
        <ThemeProvider theme={isLight ? lightTheme: darkTheme}>
            <Container >
                <Switch
                    value={isLight}
                    onValueChange={isLight => toggleTheme(isLight)}
                />
                <Input placeholder='Enter a message...'/>
            </Container>
        </ThemeProvider>
    );
}

