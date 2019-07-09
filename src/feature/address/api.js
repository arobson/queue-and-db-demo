
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

module.exports = {
    change: changeAddress,
    get: getAddress
}
