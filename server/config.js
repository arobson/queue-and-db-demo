module.exports = function (fount, express) {
    return {
        transports: [ 'deftly-express', './server/transports/*.js' ],
        resources: [ './server/resources/*.js' ],
        plugins: [ './server/plugins/*.js' ],
        middleware: [ './server/middleware/*.js' ],
        fount: fount,
        logging: {
            level: 4
        },
        http: {
            configure: express.configure,
            postRouting: express.postRouting,
            port: 8018,
            apiPrefix: 'api',
            auth: {
            }
        },
        postgres: {
            database: 'postgres',
            user: 'dev',
            password: 'pgadmin',
            host: 'localhost',
            port: 55432
        }
    }
}