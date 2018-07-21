import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Container } from 'native-base'

export default class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                <View>
                    <Text>Hello Cleanly</Text>
                </View>
            </Container>
        )
    }
}