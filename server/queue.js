const MQTT = require('async-mqtt')
const client = MQTT.connect('tcp://demo:activemq@localhost:11883')

client.on('connect', () => {
    subscribe('/demo/contact')
    subscribe('/demo/address')
    subscribe('/demo/dependent')
    subscribe('/demo/partner')
})

function handle (channel) {
    client.on('message', (topic, raw) => {
        const string = raw.toString('utf8')
        try {
            let body = JSON.parse(string)
            channel.publish(topic, body)
        } catch(e) {
            channel.publish(topic, string, e)
        }
    })
}

function publish (client, topic, message) {
    let body = JSON.stringify(message)
    return client.publish(topic, body)
}

function subscribe (topic) {
    return client.subscribe(topic)
}

module.exports = function(channel) {
    handle(channel)
    return {
        publish: publish.bind(null, client)
    }
}