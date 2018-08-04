import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Text } from 'react-native'
import { Header, Title, Body, Left, Right, Button, Icon } from 'native-base'

export default function header(name, score){
    return  <Header>
                <Left>
                    {name!="Cleanly" && 
                    <Button transparent onPress={Actions.pop}>
                        <Icon name='arrow-back' />
                    </Button>}
                </Left>
                <Body>
                    <Title>{name}</Title>
                </Body>
                <Right>
                    <Text>{score} kudos</Text>
                </Right>
            </Header>
}