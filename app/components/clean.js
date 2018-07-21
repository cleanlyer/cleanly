import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Button } from 'native-base'
import header from './common/header'


export default class Clean extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Clean")}
                <View style={{flex: 1}}>
                <Text> here goes the clean form for clean </Text>
                </View>
            </Container>
        )
    }
}