export const links = (signIn, signUp, logOut) => {
    return [
        {
            url: '/',
            text: 'Home'
        },
        {
            url: '/cities',
            text: 'Cities'
        },
        {
            text: 'Sign In',
            action: signIn
        },
        {
            text: 'Sign Up',
            action: signUp
        },
        {
            text: 'Logout',
            action: logOut
        }
    ]
}