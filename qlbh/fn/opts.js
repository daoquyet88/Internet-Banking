var opts = {
    GENERAL: {
        PRODUCTS_PER_PAGE: 6
    },

    ACCESS_TOKEN: {
        SECRET_KEY: 'secret',
        LIFETIME: 600 // in seconds
    },

    REFRESH_TOKEN: {
        SIZE: 80
    },

    DB: {
        HOST: 'localhost',

        USER: 'root',
        PWD: '',
        DB_NAME: 'qlbh'
    }
}

module.exports = opts;