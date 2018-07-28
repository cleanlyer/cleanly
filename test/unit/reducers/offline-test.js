import * as offline from '../../../src/reducers/offline'
import * as types from '../../../src/actions/types'
import * as faker from 'faker'
import * as matchers from 'jest-immutable-matchers'
import { List } from 'immutable'

describe('offline reducer should', () => {
    
    beforeEach(function () {
        jest.addMatchers(matchers)
    })

    it('add to the list of report if message SEND_REPORT_OFFLINE', () => {
        const expectedReport = { something : faker.random.number(200) }
        expect(offline.report(List(),{type: types.SEND_REPORT_OFFLINE, payload: expectedReport}))
            .toEqualImmutable(List([expectedReport]))
    })

    it('add to the list of clean if message SEND_REPORT_OFFLINE', () => {
        const expectedReport = { something : faker.random.number(200) }
        expect(offline.clean(List(),{type: types.SEND_CLEAN_OFFLINE, payload: expectedReport}))
            .toEqualImmutable(List([expectedReport]))
    })
})

describe('offline default export should', () => {
    let defaultExport
    
    beforeEach(() => {
        defaultExport = offline.default(undefined, {type:"FAKE"})
    });

    test('have clean', () => {
        expect(defaultExport.clean).toBeDefined()
    });

    test('have report', () => {
        expect(defaultExport.report).toBeDefined()
    });
});