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

function anyChange (line1, line2, region, province, country, postal) {
  return line1 || line2 || region || province || country || postal
}

const actions = {
  addressLoaded: (state, { address }) => {
    return assign({}, state, { address })
  },
  line1Changed: (state, { line1 }) => {
    return assign({}, state, { 
      line1,
      canUpdate: anyChange(line1, state.line2, state.region, state.province, state.country, state.postal)
    })
  },
  line2Changed: (state, { line2 }) => {
    return assign({}, state, { 
      line2,
      canUpdate: anyChange(state.line1, line2, state.region, state.province, state.country, state.postal)
    })
  },
  regionChanged: (state, { region }) => {
    return assign({}, state, { 
      region,
      canUpdate: anyChange(state.line1, state.line2, region, state.province, state.country, state.postal)
    })
  },
  provinceChanged: (state, { province }) => {
    return assign({}, state, { 
      province,
      canUpdate: anyChange(state.line1, state.line2, state.region, province, state.country, state.postal)
    })
  },
  countryChanged: (state, { country }) => {
    return assign({}, state, { 
      country,
      canUpdate: anyChange(state.line1, state.line2, state.region, state.province, country, state.postal)
    })
  },
  postalChanged: (state, { postal }) => {
    return assign({}, state, { 
      postal,
      canUpdate: anyChange(state.line1, state.line2, state.region, state.province, state.country, postal)
    })
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
