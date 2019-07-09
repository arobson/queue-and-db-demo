
function changeAddress (employeeId, line1, line2, province, region, country, postal) {
    return fetch(`/api/address/${employeeId}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            line1, line2, province, region, country, postalCode: postal
        })
    })
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
                return resp.json()
                    .then(x => {
                        return x && x.length && x.length >= 1 ? x[0] : {};
                    })
                    .then(p => {
                        if (p) {
                            p.postal = p.postalCode
                        }
                        return p
                    })
            } else {
                return {};
            }
        }
    )
}

module.exports = {
    change: changeAddress,
    get: getAddress
}
