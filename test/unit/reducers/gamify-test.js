import * as gamify from '../../../src/reducers/gamify'
import * as types from '../../../src/actions/types'
import * as faker from 'faker'

describe('gamify reducer should', () => {

    it('increment by the value', () => {
        const initialScore = faker.random.number(200)
        const expectedScore = faker.random.number(200)
        expect(gamify.score(initialScore,{type: types.UPDATE_SCORE, payload: expectedScore}))
            .toEqual(initialScore+expectedScore)
    })
})

describe('gamify default export should', () => {
    let defaultExport
    
    beforeEach(() => {
        defaultExport = gamify.default(undefined, {type:"FAKE"})
    });
    test('have score', () => {
        expect(defaultExport.score).toBeDefined()
    });
});