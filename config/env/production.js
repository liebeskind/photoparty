module.exports = {
    db: "mongodb://heroku:to1a11yS1ck@paulo.mongohq.com:10054/app20227552",
    app: {
        name: "Photo Party"
    },
    facebook: {
        clientID: "568587663233762",
        clientSecret: "f7e6f683dde28051d0e8db87d0b01f54",
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