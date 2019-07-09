import './style.css'
import React from 'react'
import Edit from './edit'
import { connect } from 'react-redux'
import * as action from './actions'

let initialized = false

const AddressView = ({ 
  employeeId, address, line1, line2, province, region, country, postal, 
  line1Changed, line2Changed, provinceChanged, regionChanged, 
  countryChanged, postalChanged, get, change, canUpdate
}) => {
    if (!initialized) {
      initialized = true
      get(employeeId)
    }
    let edit = Edit({employeeId, address, canUpdate, line1, line2, province, region, country, postal, 
      line1Changed, line2Changed, provinceChanged, regionChanged, 
      countryChanged, postalChanged, change})
    return (<div>
      {edit}
    </div>)
}

const mapStateToProps = (state) => {
  return {
    ...state.address
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (employeeId, address, line1, line2, province, region, country, postal) => dispatch(action.change(employeeId, address, line1, line2, province, region, country, postal)),
    get: (id) => dispatch(action.get(id)),
    line1Changed: (x) => dispatch(action.line1Changed(x)),
    line2Changed: (x) => dispatch(action.line2Changed(x)),
    provinceChanged: (x) => dispatch(action.provinceChanged(x)),
    regionChanged: (x) => dispatch(action.regionChanged(x)),
    countryChanged: (x) => dispatch(action.countryChanged(x)),
    postalChanged: (x) => dispatch(action.postalChanged(x)),
  }
}

const Address = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressView)

export default Address