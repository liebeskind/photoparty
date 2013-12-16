module.exports = {
    db: "mongodb://localhost/mean-test",
    port: 3001,
    app: {
        name: "MEAN - A Modern Stack - Test"
    },
    facebook: {
        clientID: "568587663233762",
        clientSecret: "f7e6f683dde28051d0e8db87d0b01f54",
        callbackURL: "http://photoparty.herokuapp.com/"
    },
    instagram: {
        clientID: "01d4cb393147483b9bf0e46171581f34",
        clientSecret: "79ce1ef121c445d2942126812021c8c5",
        callbackURL: "http://photoparty.herokuapp.com/"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}