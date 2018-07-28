import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Button, List, ListItem, Body, Right, Icon, Left, Thumbnail } from 'native-base'
import header from './common/header'
import { connect } from 'react-redux'


class Clean extends Component {
    constructor(props){
        super(props)
        this.props.updateGarbageList()
    }

    render() {
        this.props.Inventory = []
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Clean", this.props.score)}
                <View style={{flex: 1}}>
                <List>
                {
                    this.props.listGarbage.map((element, index) => 
                    <ListItem key={"element_"+index} thumbnail>
                    <Left>
                        <Thumbnail square source={require('./resources/logo.png')} />
                    </Left>
                        <Body><Text>latitude: {element.latitude}</Text>
                        <Text>longitude: {element.longitude}</Text></Body>
                        <Right><Button transparent onPress={() => {
                            this.props.sendClean(element.id)
                            this.props.updateScore(10)
                        }}><Icon active name="trash" /></Button></Right>
                  </ListItem>)
                }
                </List>
                </View>
            </Container>
        )
    }
}

function mapStateToProps(state){
    let score = state.gamify.score
    let listGarbage = state.track.garbageCoordinates
    return {
        listGarbage, score
    }
}

export default connect(mapStateToProps)(Clean)