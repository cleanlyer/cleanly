import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Button } from 'native-base'
import header from './common/header'
import { Actions } from 'react-native-router-flux'
import footer from './common/footer'


export default class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Cleanly")}
                <View style={{ flexDirection: "row", flex: 1}}>
                    <Image style={{ width:370, resizeMode: 'center', marginTop: 20, marginBottom: 20, backgroundColor: 'transparent' }} 
                        source={require('./resources/logo.png')} />
                </View>
                {footer()}
            </Container>
        )
    }
}