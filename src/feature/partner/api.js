
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

module.export = {
    create: createPartner,
    get: getPartners
}
