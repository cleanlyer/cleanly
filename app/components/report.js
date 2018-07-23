import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import header from './common/header'
import { Actions } from 'react-native-router-flux'
import { Container, Footer, FooterTab, Form, Item, Input, Button } from 'native-base'
import { connect } from 'react-redux'
import {v1 as uuid } from 'uuid'
// import { RNCamera } from 'react-native-camera'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

class Report extends Component {
    constructor(props){
        super(props)
        this.props.updateUserCoordinates()
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Report", this.props.score)}
                <View style={{ flex: 1 }}>
                    {/* <RNCamera
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                    >
                    {({ camera, status }) => {

                    }}
                    </RNCamera> */}
                    <Form>
                        <Item>
                            <Input value={JSON.stringify(this.props.location.latitude)} disabled={true} />
                        </Item>
                        <Item last>
                            <Input value={JSON.stringify(this.props.location.longitude)} disabled={true} />
                        </Item>
                    </Form>
                </View>
                <Footer>
                <FooterTab>
                    <Button transparent onPress={ () =>{ 
                        this.props.sendReport({
                            id: uuid(),
                            latitude: this.props.location.latitude,
                            longitude: this.props.location.longitude,
                            isClean: false
                        }) 
                        this.props.updateScore(10)
                        Actions.pop()
                    }}><Text> Submit </Text></Button>
                    <Button transparent onPress={ () =>{
                        this.props.sendReport({
                            id: uuid(),
                            latitude: this.props.location.latitude,
                            longitude: this.props.location.longitude,
                            isClean: true
                        })
                        this.props.updateScore(20)
                        Actions.pop()
                     }}><Text> Submit And Clean </Text></Button>
                </FooterTab>
            </Footer>
            </Container>
        )
    }
}


function mapStateToProps(state){
    let score = state.gamify.score
    let location = state.track.userCoordinates
    return {
        location, score
    }
}

export default connect(mapStateToProps)(Report)