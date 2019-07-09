import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import nav from './nav'

import address from './feature/address/reducer'
import contact from './feature/contact/reducer'
import notifications from './feature/notification/reducer'
import dependents from './feature/dependent/reducer'
import partners from './feature/partner/reducer'

export default function Reducer (history) {
  return combineReducers({
    address,
    contact,
    dependents,
    nav: nav(history),
    notifications,
    partners,
    routing: routerReducer
  })
}