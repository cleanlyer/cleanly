/** @format */

import {AppRegistry} from 'react-native'
import App from './src/main'
import {name as appName} from './app.json'
import { requestPermissions } from './src/helpers/permissions'

requestPermissions()
AppRegistry.registerComponent(appName, () => App)
