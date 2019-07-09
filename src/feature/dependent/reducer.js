const assign = Object.assign

const initialState = {
    employeeId: 100,
    dependents: [],
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
  dependentDoBChanged: (state, { dateOfBirth }) => {
      return assign({}, state, { 
          dateOfBirth, 
          canAdd: checkAdd(state.firstName, state.lastName, dateOfBirth)  
      })
  },
  dependentFirstChanged: (state, { firstName }) => {
      return assign({}, state, { 
          firstName, 
          canAdd: checkAdd(firstName, state.lastName, state.dateOfBirth)
      })
  },
  dependentLastChanged: (state, { lastName }) => {
      return assign({}, state, {
          lastName,
          canAdd: checkAdd(state.firstName, lastName, state.dateOfBirth)
      })
  },
  dependentsLoaded: (state, { dependents }) => {
    return assign({}, state, { dependents: dependents })
  },
  dependentAdded: (state) => {
      let list = state.dependents.slice()
      list.unshift({ 
          firstName: state.firstName, 
          lastName: state.lastName, 
          dateOfBirth: new Date(state.dateOfBirth).toISOString()
      })
      return assign({}, state, { dependents: list })
  },
  dependentClear: (state) => {
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
