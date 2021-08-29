import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import MyButton from "./MyButton";
import {styles} from "./style";
import {Box} from "./Box";
import Shadow from "./Shadow";
import styled from "styled-components/native";
import {css} from "styled-components";

const Container = styled.View`
    flex: 1;
    background-color: #e21;
    align-items: center;
    justify-content: center;
`

const cssText = css`
  font-size: 20px;
  font-weight: 600;
`

// 이렇게 CSS를 불러올수도 있고
const StyledText = styled.Text`
  ${cssText}
  color: blue;
`

// 이렇게 각 스타일을 상속받을 수도 있다.
const ErrorText = styled(StyledText)`
  color: aquamarine;
`

const StyledButton = styled.Button``

export default function App() {
    return (
        <Container>
            <StatusBar style="auto"/>
            <StyledText>Styled Components</StyledText>
            <StyledButton title="styled button" onPress={() => alert('HELLO!')}/>
            <ErrorText>This is Error Text</ErrorText>
        </Container>
    );
}

