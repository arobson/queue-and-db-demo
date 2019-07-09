import dependent from './api';
import { onConnectionFailure } from '../../actions'

export function create (employeeId, firstName, lastName, dateOfBirth) {
    return function create(dispatch) {
        return dependent.create(employeeId, firstName, lastName, dateOfBirth)
            .then(
                result => {
                    dispatch(added())
                    dispatch(clear())
                },
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function get (employeeId) {
    return function get(dispatch) {
        return dependent.get(employeeId)
            .then(
                result => dispatch(loaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function firstNameChanged (firstName) {
    return { type: 'dependentFirstChanged', firstName }
}

export function lastNameChanged (lastName) {
    return { type: 'dependentLastChanged', lastName }
}

export function dobChanged (dateOfBirth) {
    return { type: 'dependentDoBChanged', dateOfBirth }
}

function loaded (dependents) {
    return { type: 'dependentsLoaded', dependents}
}

export function added () {
    return { type: 'dependentAdded' }
}

export function clear () {
    return { type: 'dependentClear' }
}
