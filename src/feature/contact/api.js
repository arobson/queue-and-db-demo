
function changeContact (employeeId, type, contact) {
    return fetch(`/api/contact/${employeeId}/type/${type}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            type, contact
        })
    })
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
                return resp.json()
                    .then(x => {
                        return x && x.length && x.length >= 1 ? x[0] : {};
                    });
            } else {
                return {};
            }
        }
    )
}

module.exports = {
    change: changeContact,
    get: getContact
}
