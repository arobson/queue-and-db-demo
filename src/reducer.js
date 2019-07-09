const assign = Object.assign

const initialState = {
    address: {},
    contact: {},
    partners: [],
    dependents: []
}

const actions = {
  addressLoaded: (state, { address }) => {
    return assign({}, state, { address: address })
  },
  contactLoaded: (state, { contact }) => {
    return assign({}, state, { contact: contact })
  },
  partnersLoaded: (state, { partners }) => {
    return assign({}, state, { partners: partners })
  },
  dependentsLoaded: (state, { dependents }) => {
    return assign({}, state, { dependents: dependents })
  },
  messageLoaded: (state, { message }) => {
    return assign({}, state, { message: message })
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
