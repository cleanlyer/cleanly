import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Button } from 'native-base'
import header from './common/header'


export default class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Cleanly")}
                <View style={{ flexDirection: "row", flex: 1}}>
                <Text> here goes the from </Text>
                </View>
            </Container>
        )
    }
}