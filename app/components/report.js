import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import header from './common/header'
import { Container, Footer, FooterTab, Form, Item, Input, Button } from 'native-base'
import { connect } from 'react-redux'

class Report extends Component {
    constructor(props){
        super(props)
        this.props.updateUserCoordinates()
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Report")}
                <View style={{ flex: 1 }}>
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
                    <Button transparent onPress={ () =>{ }}><Text> Submit </Text></Button>
                    <Button transparent onPress={ () =>{ }}><Text> Submit And Clean </Text></Button>
                </FooterTab>
            </Footer>
            </Container>
        )
    }
}


function mapStateToProps(state){
    console.log(JSON.stringify(state))
    let location = state.track.userCoordinates
    return {
        location
    }
}

export default connect(mapStateToProps)(Report)