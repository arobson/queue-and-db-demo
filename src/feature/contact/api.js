
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

module.exports = {
    change: changeContact,
    get: getContact
}
