import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Thumbnail } from 'native-base'
import header from './common/header'
import footer from './common/footer'
import { connect } from 'react-redux'
import { ContainerBackground } from './common/ContainerBackground'

class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        score = this.props.score
        return (
            <ContainerBackground> 
                {header("Cleanly", this.props.score)}
                <View style={{flex: 1, alignItems:'center'}}>
                    <Thumbnail large style={{ resizeMode: 'center', marginTop: 20, marginBottom: 20, backgroundColor: 'transparent' }} 
                        source={require('./resources/me.png')} />
                        
                        <Text style={{fontWeight: "bold", marginTop: 20, marginBottom: 20}}>{score} kudos</Text>
                        <Text>Go and safe the planet Adrien!</Text>
                </View>
                <View style={{flex: 1}}>
                </View>
                <View style={{flex: 3}}>
                </View>
                {footer()}
            </ContainerBackground>
                
        )
    }
}

function mapStateToProps(state){
    let score = state.gamify.score
    return {
        score
    }
}

export default connect(mapStateToProps)(Main)