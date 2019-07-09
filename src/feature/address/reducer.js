const assign = Object.assign

const initialState = {
    address: {},
    employeeId: 100,
    line1: '',
    line2: '',
    region: '',
    province: '',
    country: '',
    postal: '',
    canUpdate: false
}

const RESET = {
    line1: '',
    line2: '',
    region: '',
    province: '',
    country: '',
    postal: '',
    canUpdate: false
}

const actions = {
  addressLoaded: (state, { address }) => {
    return assign({}, state, { address })
  },
  addressChanged: (state) => {
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
