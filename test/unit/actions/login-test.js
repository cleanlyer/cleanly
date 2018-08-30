import * as login from '../../../src/actions/login'
describe('login should have', () => {
    it('function for login user with google', () => {
        expect(login.loginGoogle).toBeInstanceOf(Function)
    })
})