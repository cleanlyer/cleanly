import * as gamify from '../../../src/actions/gamify'
import * as types from '../../../src/actions/types'
import * as faker from 'faker'
describe('gamify should', () => {
    it('update score should dispatch points in event UPDATE_SCORE', () => {
        let points = faker.random.number(200),
            assert = jest.fn()
        gamify.updateScore(points)(assert)
        expect(assert).toBeCalledWith({payload: points, type: types.UPDATE_SCORE})
    })
})