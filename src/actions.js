import uuid from 'uuid';
import api from './api';
const assign = Object.assign;

const notificationDefaults = {
	dismissable: true,
	duration: 15000,
	level: 'info',
	fadeDirection: 'fade-in'
};

export function changeAddress (employeeId, line1, line2, province, region, country, postal) {

}

export function changeContact (employeeId, type, contact) {

}

export function createDependent (employeeId, firstName, lastName, dateOfBirth) {

}

export function createPartner (employeeId, firstName, lastName, dateOfBirth) {

}

export function getAddress (employeeId) {
    return function get(dispatch) {
        return api.getAddress(employeeId)
            .then(
                result => dispatch(addressLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function getContact (employeeId) {
    return function get(dispatch) {
        return api.getContact(employeeId)
            .then(
                result => dispatch(contactLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function getDependents (employeeId) {
    return function get(dispatch) {
        return api.getDependents(employeeId)
            .then(
                result => dispatch(dependentsLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}

export function getPartners (employeeId) {
    return function get(dispatch) {
        return api.getPartners(employeeId)
            .then(
                result => dispatch(partnersLoaded(result)),
                onConnectionFailure.bind(null, dispatch)
            )
    }
}


export function dismissNotification (id) {
	return { type: 'dismissed', id: id };
}

export function navigateTo (url) {
	return { type: 'navigateTo', path: url };
}

export function notify (notification) {
	let message = assign( { id: uuid.v4() }, notificationDefaults, notification );
	return function send( dispatch ) {
		dispatch( { type: 'notify', message: message } );
		if( message.duration && message.duration > 0 ) {
			setTimeout( function() {
				dispatch( { type: 'dismiss', id: message.id } );
				setTimeout( function() {
					dispatch( dismissNotification( message.id ) );
				}, 500 );
			}, message.duration );
		}
	}
}

export function onAPIError (dispatch) {
	dispatch( notify( { header: 'Sorry', body: 'A problem occurred processing your request', level: 'danger' } ) );
}

export function onConnectionFailure (dispatch) {
	dispatch( notify( { header: 'Oops', body: 'Could not connect to server :(', level: 'danger' } ) );
}

export function contactChanged (contact) {
    return { type: 'contactChanged', contact }
}

export function contactTypeChanged (type) {
    return { type: 'contactTypeChanged', contactType: type }
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

export function dependentFirstNameChanged (firstName) {
    return { type: 'dependentFirstChanged', firstName }
}

export function dependentLastNameChanged (lastName) {
    return { type: 'dependentLastChanged', lastName }
}

export function dependentDoBChanged (dateOfBirth) {
    return { type: 'dependentDoBChanged', dateOfBirth }
}

function addressLoaded (address) {
    return { type: 'adressLoaded', address }
}

function contactLoaded (contact) {
    return { type: 'contactLoaded', contact }
}

function dependentsLoaded (dependents) {
    return { type: 'dependentsLoaded', dependents}
}

function partnersLoaded (partners) {
    return { type: 'partnersLoaded', partners }
}
