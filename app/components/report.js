import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Button } from 'native-base'
import header from './common/header'


export default class Report extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Report")}
                <View style={{ flexDirection: "row", flex: 1}}>
                <Text> here goes the form for report </Text>
                </View>
            </Container>
        )
    }
}