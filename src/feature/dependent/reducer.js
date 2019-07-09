const assign = Object.assign

const initialState = {
    dependents: [],
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    canAdd: false
}

const actions = {
  dependentsLoaded: (state, { dependents }) => {
    return assign({}, state, { dependents: dependents })
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
