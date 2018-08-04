import React, { Component } from "react"
import { ImageBackground } from 'react-native'
import { Container } from 'native-base'

class ContainerBackground extends Component {
	render() {
		return (
            <Container {...this.props}>
                <ImageBackground source={require('../resources/bg.png')} style={{width: '100%', height: '100%' }} {...this.props}>
                    {this.props.children}
                </ImageBackground>
            </Container>
		);
	}
}

export { ContainerBackground }