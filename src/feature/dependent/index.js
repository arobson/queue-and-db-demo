import './style.css'
import React from 'react'
import _ from 'lodash'
import Item from './item'
import Edit from './edit'
import { connect } from 'react-redux'
import * as dependent from './actions'

let initialized = false

const DependentList = ({ employeeId, firstName, lastName, dateOfBirth, canAdd, dependents, firstChanged, lastChanged, dobChanged, get, create }) => {
    if (!initialized) {
      initialized = true
      get(employeeId)
    }
    let list = (dependents || []).map((x, i) => Item(i, x))
    let edit = Edit({employeeId, firstName, lastName, dateOfBirth, canAdd, firstChanged, lastChanged, dobChanged, create})
    return (<div className="item-list">
        {edit}
        <hr />
        {list}
    </div>)
}

const mapStateToProps = (state) => {
  return {
    ...state.dependents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (id, first, last, dob) => dispatch(dependent.create(id, first, last, dob)),
    get: (id) => dispatch(dependent.get(id)),
    firstChanged: (first) => dispatch(dependent.firstNameChanged(first)),
    lastChanged: (last) => dispatch(dependent.lastNameChanged(last)),
    dobChanged: (dob) => dispatch(dependent.dobChanged(dob)),
    clear: () => dispatch(dependent.clear())
  }
}

const Dependent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DependentList)

export default Dependent