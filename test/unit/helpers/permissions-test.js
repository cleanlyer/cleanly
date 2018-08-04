import * as permissions from '../../../src/helpers/permissions'
import { PermissionsAndroid } from 'react-native'
import * as os from '../../../src/helpers/os'
import * as faker from 'faker'


describe('permissions', () => { 
    it('should return true if user accepts use of camera with true', async () => {
        PermissionsAndroid.request = jest.fn(() => Promise.resolve(true))
        os.getOS = jest.fn(() => 'android')
        let result = await permissions.requestPermissions()
        expect(PermissionsAndroid.request).toBeCalledWith(PermissionsAndroid.PERMISSIONS.CAMERA)
        expect(result).toEqual(true)
    })

    it('should return true if user accepts use of camera with GRANT', async () => {
        PermissionsAndroid.request = jest.fn(() => Promise.resolve(PermissionsAndroid.RESULTS.GRANTED))
        os.getOS = jest.fn(() => 'android')
        let result = await permissions.requestPermissions()
        expect(PermissionsAndroid.request).toBeCalledWith(PermissionsAndroid.PERMISSIONS.CAMERA)
        expect(result).toEqual(true)
    })

    it('should return true any other system', async () => {
        PermissionsAndroid.request = jest.fn(() => Promise.resolve(false))
        os.getOS = jest.fn(() => faker.random.uuid())
        let result = await permissions.requestPermissions()
        expect(PermissionsAndroid.request).not.toBeCalled()
        expect(result).toEqual(true)
    })

    it('should return false if other response', async () => {
        PermissionsAndroid.request = jest.fn(() => Promise.resolve(false))
        os.getOS = jest.fn(() => 'android')
        let result = await permissions.requestPermissions()
        expect(PermissionsAndroid.request).toBeCalledWith(PermissionsAndroid.PERMISSIONS.CAMERA)
        expect(result).toEqual(false)
    })
})