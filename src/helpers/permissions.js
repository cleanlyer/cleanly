import { PermissionsAndroid } from 'react-native'
import * as os from './os'

export const requestPermissions = async () => {
    if(os.getOS() === 'android') { 
        const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        return result === PermissionsAndroid.RESULTS.GRANTED || result === true
    }
    return true;
}