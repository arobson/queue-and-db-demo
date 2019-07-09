import address from './api';
import { onConnectionFailure } from '../../actions'

export function change (employeeId, original, line1, line2, province, region, country, postal) {
    return function change(dispatch) {
        return address.change(employeeId,
            line1 || original.line1, 
            line2 || original.line2, 
            province || original.province, 
            region || original.region, 
            country || original.country, 
            postal || original.postal)
            .then(
                () => {
                    dispatch(changed({
                        employeeId, line1, line2, province, region, country, postal
                    }))
                },
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function get (employeeId) {
    return function get(dispatch) {
        return address.get(employeeId)
            .then(
                result => dispatch(loaded(result)),
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

function loaded (loaded) {
    return { type: 'addressLoaded', address: loaded }
}

function changed (changed) {
    return { type: 'addressChanged', address: changed }
}
