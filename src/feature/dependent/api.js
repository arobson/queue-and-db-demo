
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

module.exports = {
    create: createDependent,
    get: getDependents
}
