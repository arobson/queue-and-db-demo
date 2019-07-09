import address from './api';
import { onConnectionFailure } from '../../actions'

export function changeAddress (employeeId, line1, line2, province, region, country, postal) {

}

export function getAddress (employeeId) {
    return function get(dispatch) {
        return address.get(employeeId)
            .then(
                result => dispatch(addressLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function line1Changed (line1) {
    return { type: 'line1Changed', line1 }
}

export function line2Changed (line2) {
    return { type: 'line2Changed', line2 }
}

export function provinceChanged (province) {
    return { type: 'provinceChanged', province }
}

export function regionChanged (region) {
    return { type: 'regionChanged', region }
}

export function countryChanged (country) {
    return { type: 'countryChanged', country }
}

export function postalChanged (postal) {
    return { type: 'postalChanged', postal }
}

function addressLoaded (address) {
    return { type: 'adressLoaded', address }
}
