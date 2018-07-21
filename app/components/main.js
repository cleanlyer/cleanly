import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container } from 'native-base'
import header from './common/header'


export default class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Cleanly")}
                <View>
                <Image  style={{ width:370, resizeMode: 'center', marginTop: 20, marginBottom: 20, backgroundColor: 'transparent' }} 
                        source={require('./resources/logo.png')} />
                </View>
            </Container>
        )
    }
}