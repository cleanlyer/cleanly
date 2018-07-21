import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Button } from 'native-base'
import header from './common/header'
import footer from './common/footer'
import { connect } from 'react-redux'

class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Cleanly", this.props.score)}
                <View style={{flex: 1}}>
                    <Image style={{ width:370, resizeMode: 'center', marginTop: 20, marginBottom: 20, backgroundColor: 'transparent' }} 
                        source={require('./resources/logo.png')} />
                </View>
                {footer()}
            </Container>
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