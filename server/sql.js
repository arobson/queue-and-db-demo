const fs = require('fs')
const path = require('path')

const templates = {
    create_contact: getSqlFor('create_contact'),
    create_partner: getSqlFor('create_partner'),
    create_dependent: getSqlFor('create_dependent'),
    create_address: getSqlFor('create_address'),
    insert_partner: getSqlFor('insert_partner'),
    insert_dependent: getSqlFor('insert_dependent'),
    update_contact: getSqlFor('update_contact'),
    update_address: getSqlFor('update_address'),
    select_partner: getSqlFor('select_partner'),
    select_dependent: getSqlFor('select_dependent'),
    select_contact: getSqlFor('select_contact'),
    select_address: getSqlFor('select_address')
}

function getSqlFor (name) {
    return fs.readFileSync(path.join(__dirname, './sql', `${name}.sql`)).toString('utf8')
}

function initialize(client) {
    return Promise.all([
        client(pg => pg.query(templates.create_contact)),
        client(pg => pg.query(templates.create_partner)),
        client(pg => pg.query(templates.create_dependent)),
        client(pg => pg.query(templates.create_address))
    ])
}

function insertDependent (client, id, firstName, lastName, dob) {
    return client(pg => pg.query({
        name: "insert_dependent",
        text: templates.insert_dependent,
        values: [
            id, firstName, lastName, dob
        ]
    }))
}

function insertPartner (client, id, firstName, lastName, dob) {
    return client(pg => pg.query({
        name: "insert_partner",
        text: templates.insert_partner,
        values: [
            id, firstName, lastName, dob
        ]
    }))
}

function updateAddress (client, id, line1, line2, city, province, region, postal) {
    return client(pg => pg.query({
        name: "update_address",
        text: templates.update_address,
        values: [
            id, line1, line2, city, province, region, postal
        ]
    }))
}

function updateContact (client, id, type, contact) {
    return client(pg => pg.query({
        name: "update_contact",
        text: templates.update_contact,
        values: [
            id, type, contact
        ]
    }))
}

function selectAddress (client, id) {
    return client(pg => pg.query({
        name: "select_address",
        text: templates.select_address,
        values: [ id ]
    }))
}

function selectContact (client, id) {
    return client(pg => pg.query({
        name: "select_contact",
        text: templates.select_contact,
        values: [ id ]
    }))
}

function selectDependent (client, id) {
    return client(pg => pg.query({
        name: "select_dependent",
        text: templates.select_dependent,
        values: [ id ]
    }))
}

function selectPartner (client, id) {
    return client(pg => pg.query({
        name: "select_partner",
        text: templates.select_partner,
        values: [ id ]
    }))
}

module.exports = function(onClient) {
    initialize(onClient)
        .then(
            () => console.info('successfully initialized database'),
            e => console.error(`failed to initialize database with ${e}`)
        )
    return {
        insertDependent: insertDependent.bind(null, onClient),
        insertPartner: insertPartner.bind(null, onClient),
        updateAddress: updateAddress.bind(null, onClient),
        updateContact: updateContact.bind(null, onClient),
        selectAddress: selectAddress.bind(null, onClient),
        selectContact: selectContact.bind(null, onClient),
        selectDependent: selectDependent.bind(null, onClient),
        selectPartner: selectPartner.bind(null, onClient)
    }
}