import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import { Actions, Router, Scene } from 'react-native-router-flux'

import main from './main'
import report from './report'
import clean from './clean'

class AppContainer extends Component {
    render() {
            return <Router {...this.props}>
                        <Scene key="root" hideNavBar={true} tabs={false} >
                            <Scene key="tabbar" tabs={false} hideNavBar={true}>
                                <Scene key='main' component={main} title="Cleanly" initial />
                                <Scene key='report' component={report} title="Report" />
                                <Scene key='clean' component={clean} title="Clean" />
                            </Scene>
                        </Scene>
                    </Router>
        }
    }

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(() => {return {}}, mapDispatchToProps)(AppContainer)