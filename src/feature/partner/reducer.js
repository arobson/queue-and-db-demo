const assign = Object.assign

const initialState = {
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

function checkAdd ({ firstName, lastName, dateOfBirth }) {
    return firstName !== '' && lastName !== '' && dateOfBirth !== ''
}

const actions = {
    partnerDoBChanged: (state, dateOfBirth) => {
        return assign({}, state, { dateOfBirth, canAdd: checkAdd(state) })
    },
    partnerFirstChanged: (state, firstName) => {
        return assign({}, state, { firstName, canAdd: checkAdd(state) })
    },
    partnerLastChanged: (state, lastName) => {
        return assign({}, state, { lastName, canAdd: checkAdd(state) })
    },
    partnersLoaded: (state, { partners }) => {
        return assign({}, state, { partners: partners })
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
