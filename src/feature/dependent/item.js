import React from 'react'

const Item = (index, {firstName, lastName, dateOfBirth}) => {
    console.log(index, firstName)
    return (<div className="item-row" key={index} >
        <span className="display-field">{firstName}</span>
        <span className="display-field">{lastName}</span>
        <span className="display-field">{dateOfBirth}</span>
    </div>)
}

export default Item