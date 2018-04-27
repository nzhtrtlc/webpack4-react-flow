export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 1500)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 1500)
    }
}