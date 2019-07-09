import dependent from './api';
import { onConnectionFailure } from '../../actions'

export function createDependent (employeeId, firstName, lastName, dateOfBirth) {

}

export function getDependents (employeeId) {
    return function get(dispatch) {
        return dependent.get(employeeId)
            .then(
                result => dispatch(dependentsLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function dependentFirstNameChanged (firstName) {
    return { type: 'dependentFirstChanged', firstName }
}

export function dependentLastNameChanged (lastName) {
    return { type: 'dependentLastChanged', lastName }
}

export function dependentDoBChanged (dateOfBirth) {
    return { type: 'dependentDoBChanged', dateOfBirth }
}

function dependentsLoaded (dependents) {
    return { type: 'dependentsLoaded', dependents}
}
