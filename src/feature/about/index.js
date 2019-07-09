import React from 'react'
import './style.css'

const About = () => (
  <div className='container-fluid text-content'>
    <h2>About</h2>
    <div className='row'>
      <div className='col-md-5 about-section'>
        <p>
          This project uses a very simple React client to communicate with an HTTP API to
          send messages via MQTT to an ActiveMQ topic. Those messages are then processed
          to make changes to underlying PostgreSQL tables.
        </p>
      </div>
    </div>
  </div>
)

export default About
