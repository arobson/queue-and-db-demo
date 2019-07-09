import uuid from 'uuid';
const assign = Object.assign;

const notificationDefaults = {
	dismissable: true,
	duration: 15000,
	level: 'info',
	fadeDirection: 'fade-in'
};

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

export function onConnectionFailure (dispatch, e) {
	dispatch( notify( { header: 'Oops', body: e.message, level: 'danger' } ) );
}
