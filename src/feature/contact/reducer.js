const assign = Object.assign

const initialState = {
    contactType: '',
    contact: '',
    canChange: false
}

const actions = {
  contactLoaded: (state, { contact }) => {
    return assign({}, state, { contact: contact })
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
