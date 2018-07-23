import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Text } from 'react-native'
import { Footer, FooterTab, Button } from 'native-base'

export default function footer(){
    return  <Footer>
                <FooterTab>
                    <Button transparent onPress={ () =>{ Actions.report() }}><Text> Report </Text></Button>
                    <Button transparent onPress={ () =>{ Actions.clean() }}><Text> Clean </Text></Button>
                </FooterTab>
            </Footer>
}