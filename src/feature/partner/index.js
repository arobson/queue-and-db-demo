import './style.css'
import React from 'react'
import _ from 'lodash'
import Item from './item'
import Edit from './edit'
import { connect } from 'react-redux'
import * as partner from './actions'

const PartnerList = ({ employeeId, firstName, lastName, dateOfBirth, canEdit, partners, firstChanged, lastChanged, dobChanged, get, create, clear }) => {
    get()
    let list = (partners || []).map(x => Item(x))
    let edit = Edit({employeeId, firstName, lastName, dateOfBirth, canEdit, firstChanged, lastChanged, dobChanged, create})
    return (<div className="item-list">
        {list}
        {edit}
    </div>)
}

const mapStateToProps = (state, partners) => {
  return {
    ...state.partners,
    partners
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (id, first, last, dob) => dispatch(partner.create(id, first, last, dob)),
    get: (id) => dispatch(partner.get(id)),
    firstChanged: (first) => dispatch(partner.firstNameChanged(first)),
    lastChanged: (last) => dispatch(partner.lastNameChanged(last)),
    dobChanged: (dob) => dispatch(partner.dobChanged(dob)),
    clear: () => dispatch(partner.clear())
  }
}

const Partner = connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnerList)

export default Partner