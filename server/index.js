const deftly = require('deftly')
const fount = require('fount')
const { Pool } = require('pg')
const postal = require('postal')

const dependencies = {
  fount: fount,
  auth: {},
  express: require('./express'),
  config: require('./config'),
  channel: postal.channel('messages'),
  onClient: getDbClient,
  sql: { scoped: require('./sql') },
  queue: { scoped: require('./queue') },
  handlers: { scoped: require('./handlers') }
}

fount({
  default: dependencies,
  resources: dependencies
})

fount.inject(startService)

function getDbClient(config) {
    const db = config.postgres
    let pool = new Pool({
      database: db.database || db.user,
      user: db.user,
      password: db.password,
      host: db.host || 'localhost',
      port: db.port || 5432
    })
    const onClient = async function onClient (op) {
      const client = await pool.connect()
      return op(client)
        .then(
          x => {
            client.release()
            return x
          }
        )
        .catch(
          err => {
            client.release()
            throw err
          }
        )
    }
    return onClient
}

function startService (config, channel, sql, handlers) {
    deftly
      .init(config)
      .then((service) => {
        service.metrics.useLocalAdapter()
        service.metrics.recordUtilization(30000)
        service.start()
      })
  }