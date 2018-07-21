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
                    <Image style={{ width:370, resizeMode: 'center', marginTop: 20, marginBottom: 20, backgroundColor: 'transparent' }} 
                        source={require('./resources/logo.png')} />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, padding: 15 }}>
                <Button success><Text> Report </Text></Button>
                <Button success><Text> Clean </Text></Button>
                </View>
            </Container>
        )
    }
}