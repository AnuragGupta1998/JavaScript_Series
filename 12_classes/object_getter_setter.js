const User = {
    _email: 'h@hc.com',
    _password: "abc",


    // object based getter setter for email........................
    get email(){
        return this._email.toUpperCase()
    },

    // object based getter setter for password........................

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);