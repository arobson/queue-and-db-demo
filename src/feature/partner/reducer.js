const assign = Object.assign

const initialState = {
    employeeId: 100,
    partners: [],
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    canAdd: false
}

const RESET = { 
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        canAdd: false
    }

function checkAdd (firstName, lastName, dateOfBirth) {
    return firstName.length > 0 && lastName.length > 0 && dateOfBirth.length > 0
}

const actions = {
    partnerDoBChanged: (state, { dateOfBirth }) => {
        return assign({}, state, { 
            dateOfBirth, 
            canAdd: checkAdd(state.firstName, state.lastName, dateOfBirth)  
        })
    },
    partnerFirstChanged: (state, { firstName }) => {
        return assign({}, state, { 
            firstName, 
            canAdd: checkAdd(firstName, state.lastName, state.dateOfBirth)
        })
    },
    partnerLastChanged: (state, { lastName }) => {
        return assign({}, state, {
            lastName,
            canAdd: checkAdd(state.firstName, lastName, state.dateOfBirth)
        })
    },
    partnersLoaded: (state, { partners }) => {
        return assign({}, state, { partners: partners })
    },
    partnerAdded: (state) => {
        let list = state.partners.slice()
        list.unshift({ 
            firstName: state.firstName, 
            lastName: state.lastName, 
            dateOfBirth: new Date(state.dateOfBirth).toISOString()
        })
        return assign({}, state, { partners: list })
    },
    partnerClear: (state) => {
        return assign({}, state, RESET)
    }
}

export default function reducer (state = initialState, action) {
  let fn = actions[ action.type ]
  if (fn) {
    return fn(state, action)
  } else {
    return state
  }
}
