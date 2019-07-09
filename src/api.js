
function changeAddress (employeeId, line1, line2, province, region, country, postal) {
    return fetch(`/api/address/${employeeId}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            line1, line2, province, region, country, postal
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

function changeContact (employeeId, type, contact) {
    return fetch(`/api/contact/${employeeId}/type/${type}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            type, contact
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

function createDependent (employeeId, firstName, lastName, dateOfBirth) {
    return fetch(`/api/dependent/${employeeId}`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            firstName, lastName, dateOfBirth
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

function createPartner (employeeId, firstName, lastName, dateOfBirth) {
    return fetch(`/api/partner/${employeeId}`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            firstName, lastName, dateOfBirth
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

function getAddress (employeeId) {
    return fetch(`/api/address/${employeeId}`, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

function getContact (employeeId) {
    return fetch(`/api/contact/${employeeId}`, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

function getDependents (employeeId) {
    return fetch(`/api/dependent/${employeeId}`, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

function getPartners (employeeId) {
    return fetch(`/api/partner/${employeeId}`, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        resp => {
            if (resp.status === 200) {
                return resp.json() || [];
            } else {
                return [];
            }
        }
    )
}

module.exports = {
    changeAddress,
    changeContact,
    createDependent,
    createPartner,
    getAddress,
    getContact,
    getDependents,
    getPartners,
}