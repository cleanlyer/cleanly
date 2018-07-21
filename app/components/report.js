import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import header from './common/header'
import { Container, Footer, FooterTab, Form, Item, Input, Button } from 'native-base'

export default class Report extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Report")}
                <View style={{ flex: 1 }}>
                    <Form>
                        <Item>
                            <Input placeholder="Latitude" />
                        </Item>
                        <Item last>
                            <Input placeholder="Longitude" />
                        </Item>
                    </Form>
                </View>
                <Footer>
                <FooterTab>
                    <Button transparent onPress={ () =>{ }}><Text> Submit </Text></Button>
                    <Button transparent onPress={ () =>{ }}><Text> Submit And Clean </Text></Button>
                </FooterTab>
            </Footer>
            </Container>
        )
    }
}