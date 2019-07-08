function addDependent (sql, msg) {
    sql.insertDependent(msg.employeeId, msg.firstName, msg.lastName, msg.dateOfBirth)
        .then(
            () => console.info(`added new dependent to employee ${msg.employeeId}`),
            e => console.error(`failed to add new dependent with ${e}`)
        )
}

function addPartner (sql, msg) {
    sql.insertPartner(msg.employeeId, msg.firstName, msg.lastName, msg.dateOfBirth)
        .then(
            () => console.info(`added new partner to employee ${msg.employeeId}`),
            e => console.error(`failed to add new partner with ${e}`)
        )
}

function changeAddress (sql, msg) {
    sql.updateAddress(msg.employeeId, msg.line1, msg.line2, msg.province, msg.region, msg.country, msg.postal)
        .then(
            () => console.info(`changed employee ${msg.employeeId}'s address`),
            e => console.error(`failed to change address with ${e}`)
        )
}

function changeContact (sql, msg) {
    sql.updateContact(msg.employeeId, msg.type, msg.contact)
        .then(
            () => console.info(`changed employee ${msg.employeeId}'s contact`),
            e => console.error(`failed to change contact with ${e}`)
        )
}

module.exports = function(sql, channel) {
    channel.subscribe('/demo/contact', changeContact.bind(null, sql))
    channel.subscribe('/demo/address', changeAddress.bind(null, sql))
    channel.subscribe('/demo/dependent', addDependent.bind(null, sql))
    channel.subscribe('/demo/partner', addPartner.bind(null, sql))
}