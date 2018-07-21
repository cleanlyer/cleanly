import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Button, List, ListItem, Body, Right, Icon } from 'native-base'
import header from './common/header'
import { connect } from 'react-redux'


class Clean extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        this.props.Inventory = []
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Clean")}
                <View style={{flex: 1}}>
                <List>
                {
                    this.props.Inventory.map((element, index) => 
                    <ListItem key={"element_"+index}>
                        <Body><Text>{JSON.stringify(element)}</Text></Body>
                        <Right><Button transparent onPress={() => {
                            this.props.sendClean(element.id)
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
    let Inventory = state.track.garbageCoordinates
    return {
        Inventory
    }
}

export default connect(mapStateToProps)(Clean)