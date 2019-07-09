import contact from './api';
import { onConnectionFailure } from '../../actions'

export function change (employeeId, original, type, contact) {
    return function change(dispatch) {
        return contact.change(employeeId,
            type || original.type, 
            contact || original.contact)
            .then(
                () => {
                    dispatch(changed({
                        employeeId, type, contact
                    }))
                },
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function get (employeeId) {
    return function get(dispatch) {
        return contact.get(employeeId)
            .then(
                result => dispatch(contactLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function changed (contact) {
    return { type: 'contactChanged', contact }
}

export function contactChanged (field) {
    return { type: 'contactFieldChanged', contact: field }
}

export function typeChanged (type) {
    return { type: 'contactTypeChanged', contactType: type }
}

function contactLoaded (contact) {
    return { type: 'contactLoaded', contact }
}
