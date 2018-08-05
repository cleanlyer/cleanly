import React, { Component } from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import { Left, Body, Right, Icon, Thumbnail, ListItem } from 'native-base'
import header from './common/header'
import { connect } from 'react-redux'
import { ContainerBackground } from './common/ContainerBackground'
import MapView, { Marker } from 'react-native-maps'
import Carousel from 'react-native-snap-carousel'

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;

var styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
        // other styles for the inner container
    },
    fullScreen: {
        flex:1
    },
    floatView: {
        position: 'absolute',
        bottom: 10,
        height: itemHeight,
        left: horizontalMargin,
        right: horizontalMargin,
    },
    parent: {
        flex: 1
    }
});

class Clean extends Component {
    constructor(props){
        super(props)
        this.props.updateGarbageList()
    }

    _renderItem ({item, _}, props) {
        return (
            <View>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={require('./resources/logo.png')} />
                    </Left>
                    <Body>
                        <Text>latitude: {item.latitude}</Text>
                        <Text>longitude: {item.longitude}</Text>
                    </Body>
                    <Right>
                        <Icon name="trash" onPress={() => {
                            props.sendClean(item.id)
                            props.updateScore(10)}} />
                        </Right>
                </ListItem>
            </View>
        );
    }

    render() {
        return (
            <ContainerBackground>
                {header("Clean", this.props.score)}
                <View style={styles.fullScreen}>
                <MapView style={styles.fullScreen}
                    initialRegion={this.props.location}
                    region={this.props.location}
                    showsUserLocation = {true}
                    showsPointsOfInterest = {false}
                    zoomEnabled = {true}
                    scrollEnabled = {true}
                    showsMyLocationButton = {true}/>
                </View>
                <View style={styles.floatView}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={this.props.listGarbage}
                  renderItem={param => this._renderItem(param, this.props)}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  firstItem={1}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={1}
                    />
                </View>

            </ContainerBackground>
        )
    }
}

function mapStateToProps(state){
    let score = state.gamify.score
    let listGarbage = state.track.garbageCoordinates.toJS()
    let location = Object.assign({}, state.track.userCoordinates, {
      latitudeDelta: 0.5000,
      longitudeDelta: 0.5000,
    })
    console.log(location)
    return {
        listGarbage, score, location
    }
}

export default connect(mapStateToProps)(Clean)