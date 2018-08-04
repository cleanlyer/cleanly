import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, List, ListItem, Body, Right, Icon, Left, Thumbnail } from 'native-base'
import header from './common/header'
import { connect } from 'react-redux'
import { ContainerBackground } from './common/ContainerBackground'


class Clean extends Component {
    constructor(props){
        super(props)
        this.props.updateGarbageList()
    }

    render() {
        this.props.Inventory = []
        return (
            <ContainerBackground>
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
                        <Right>
                        <Icon name="trash" onPress={() => {
                            this.props.sendClean(element.id)
                            this.props.updateScore(10)}} /></Right>
                  </ListItem>)
                }
                </List>
                </View>
            </ContainerBackground>
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