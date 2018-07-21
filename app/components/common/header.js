import React from 'react'
import { Header, Title, Body, Left, Right } from 'native-base'

export default function header(name){
    return  <Header>
                <Left/>
                <Body>
                    <Title>{name}</Title>
                </Body>
                <Right/>
            </Header>
}