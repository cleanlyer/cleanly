import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import { Router, Scene } from 'react-native-router-flux'
import { StyleProvider } from 'native-base'

import login from './login'
import main from './main'
import report from './report'
import clean from './clean'

import getTheme from '../theme/components'
import cleanly from '../theme/variables/cleanly'

class AppContainer extends Component {
    render() {
            return <StyleProvider style={getTheme(cleanly)}>
                    <Router {...this.props}>
                        <Scene key="root" hideNavBar={true} tabs={false} >
                            <Scene key='login' component={login} title="Login" />
                            <Scene key='main' component={main} title="Cleanly" initial />
                            <Scene key='report' component={report} title="Report" />
                            <Scene key='clean' component={clean} title="Clean" />
                        </Scene>
                    </Router>
                    </StyleProvider>
        }
    }

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(() => {return {}}, mapDispatchToProps)(AppContainer)