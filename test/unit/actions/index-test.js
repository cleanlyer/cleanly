import { ActionCreators } from '../../../src/actions'
describe('index actions should have', () => {
    it('updateScore Action', () => {
    expect(ActionCreators.updateScore).toBeInstanceOf(Function)
    })

    it('updateUserCoordinates Action', () => {
    expect(ActionCreators.updateUserCoordinates).toBeInstanceOf(Function)
    })

    it('updateGarbageList Action', () => {
    expect(ActionCreators.updateGarbageList).toBeInstanceOf(Function)
    })

    it('sendReport Action', () => {
    expect(ActionCreators.sendReport).toBeInstanceOf(Function)
    })

    it('sendClean Action', () => {
    expect(ActionCreators.sendClean).toBeInstanceOf(Function)
    })

    it('loginGoogle Action', () => {
    expect(ActionCreators.loginGoogle).toBeInstanceOf(Function)
    })
})