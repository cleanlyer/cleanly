import { GoogleSigninButton } from 'react-native-google-signin';
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { ContainerBackground } from './common/ContainerBackground'

class Login extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <ContainerBackground> 
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <GoogleSigninButton
                        style={{ width: 212, height: 48 }}
                        size={GoogleSigninButton.Size.Standard}
                        color={GoogleSigninButton.Color.Auto}
                        onPress={() => {this.props.loginGoogle()}}
                    />
                </View>
            </ContainerBackground>
                
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps)(Login)