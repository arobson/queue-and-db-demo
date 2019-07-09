    
import React, { Component } from 'react'
import './style.css'
import { Route, Switch, Link } from 'react-router-dom'
import Address from '../address'
import Contact from '../contact'
import Default from '../default'
import Dependent from '../dependent'
import Partner from '../partner'

class Main extends Component {
  render () {
    return (
      <div className='main-container row'>
        <div className='col-xs-4 col-sm-3 col-md-3 col-lg-2 vertical-nav'>
          <Link to='/address'>
            <i className="fa fa-address-book">&nbsp;</i>address
          </Link>
          <Link to='/contact'>
            <i className="fa fa-phone">&nbsp;</i>contact
          </Link>
          <Link to='/dependent'>
            <i className="fa fa-child">&nbsp;</i>dependent
          </Link>
          <Link to='/partner'>
            <i className="fa fa-heart">&nbsp;</i>partner
          </Link>
        </div>
        <div className='col-xs-8 col-sm-9 col-md-9 col-lg-10 main-component'>
          <Switch>
            <Route path='/address' component={Address} />
            <Route path='/contact' component={Contact} />
            <Route path='/dependent' component={Dependent} />
            <Route path='/partner' component={Partner} />
            <Route component={Default} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main