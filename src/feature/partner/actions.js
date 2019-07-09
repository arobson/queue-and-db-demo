import partner from './api';
import { onConnectionFailure } from '../../actions'

export function create (employeeId, firstName, lastName, dateOfBirth) {
    return function create(dispatch) {
        return partner.create(employeeId, firstName, lastName, dateOfBirth)
            .then(
                result => dispatch(added()),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function get (employeeId) {
    return function get(dispatch) {
        return partner.get(employeeId)
            .then(
                result => dispatch(loaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function firstNameChanged (firstName) {
    return { type: 'partnerFirstChanged', firstName }
}

export function lastNameChanged (lastName) {
    return { type: 'partnerLastChanged', lastName }
}

export function dobChanged (dateOfBirth) {
    return { type: 'partnerDoBChanged', dateOfBirth }
}

export function loaded (partners) {
    return { type: 'partnersLoaded', partners}
}

export function added () {
    return { type: 'partnerAdded' }
}

export function clear () {
    return { type: 'partnerClear' }
}
