import contact from './api';
import { onConnectionFailure } from '../../actions'

export function changeContact (employeeId, type, contact) {

}

export function getContact (employeeId) {
    return function get(dispatch) {
        return contact.get(employeeId)
            .then(
                result => dispatch(contactLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function contactChanged (contact) {
    return { type: 'contactChanged', contact }
}

export function contactTypeChanged (type) {
    return { type: 'contactTypeChanged', contactType: type }
}

function contactLoaded (contact) {
    return { type: 'contactLoaded', contact }
}
