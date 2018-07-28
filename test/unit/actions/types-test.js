import * as types from '../../../src/actions/types'
describe('types should have', () => {
    it('UPDATE_USER_LOCATION as UPDATE_USER_LOCATION', () => {
        expect(types.UPDATE_USER_LOCATION).toEqual('UPDATE_USER_LOCATION')
    })

    it('SEND_REPORT as SEND_REPORT', () => {
        expect(types.SEND_REPORT).toEqual('SEND_REPORT')
    })

    it('SEND_CLEAN as SEND_CLEAN', () => {
        expect(types.SEND_CLEAN).toEqual('SEND_CLEAN')
    })

    it('UPDATE_SCORE as UPDATE_SCORE', () => {
        expect(types.UPDATE_SCORE).toEqual('UPDATE_SCORE')
    })

    it('GET_GARBAGE as GET_GARBAGE', () => {
        expect(types.GET_GARBAGE).toEqual('GET_GARBAGE')
    })

    it('GET_GARBAGE_OFFLINE as GET_GARBAGE_OFFLINE', () => {
        expect(types.GET_GARBAGE_OFFLINE).toEqual('GET_GARBAGE_OFFLINE')
    })

    it('SEND_REPORT_OFFLINE as SEND_REPORT_OFFLINE', () => {
        expect(types.SEND_REPORT_OFFLINE).toEqual('SEND_REPORT_OFFLINE')
    })

    it('SEND_CLEAN_OFFLINE as SEND_CLEAN_OFFLINE', () => {
        expect(types.SEND_CLEAN_OFFLINE).toEqual('SEND_CLEAN_OFFLINE')
    })
})
