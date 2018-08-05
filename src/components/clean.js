import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { List, ListItem, Body, Right, Icon, Left, Thumbnail } from 'native-base'
import header from './common/header'
import { connect } from 'react-redux'
import { ContainerBackground } from './common/ContainerBackground'
import MapView, { Marker } from 'react-native-maps'

class Clean extends Component {
    constructor(props){
        super(props)
        this.props.updateGarbageList()
    }

    render() {
        return (
            <ContainerBackground>
                {header("Clean", this.props.score)}
                <MapView style={{flex: 1}}
                    region={this.props.location}
                    showsUserLocation = {true}
                    showsPointsOfInterest = {false}
                    zoomEnabled = {true}
                    scrollEnabled = {false}
                    showsMyLocationButton = {false}>
                    {
                        this.props.listGarbage.map((element, index) => 
                        <Marker key={"element_"+index}
                        coordinate={element}
                        title="some garbage"
                        description="some garbage tags"
                        />
                    )}
                </MapView>
            </ContainerBackground>
        )
    }
}

function mapStateToProps(state){
    let score = state.gamify.score
    let listGarbage = state.track.garbageCoordinates
    let location = Object.assign({}, state.track.userCoordinates, {
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
    console.log(location)
    return {
        listGarbage, score, location
    }
}

export default connect(mapStateToProps)(Clean)