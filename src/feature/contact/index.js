import './style.css'
import React from 'react'
import Edit from './edit'
import { connect } from 'react-redux'
import * as action from './actions'

let initialized = false

const ContactView = ({ 
  employeeId, original, type, contact, 
  typeChanged, contactChanged,
  get, change, canUpdate
}) => {
    if (!initialized) {
      initialized = true
      get(employeeId)
    }
    let edit = Edit({employeeId, original, canUpdate, type, contact, 
      typeChanged, contactChanged, get, change})
    return (<div>
      {edit}
    </div>)
}

const mapStateToProps = (state) => {
  return {
    ...state.contact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (employeeId, original, type, contact) => dispatch(action.change(employeeId, original, type, contact)),
    get: (id) => dispatch(action.get(id)),
    typeChanged: (x) => dispatch(action.typeChanged(x)),
    contactChanged: (x) => dispatch(action.contactChanged(x)),
  }
}

const Contact = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactView)

export default Contact