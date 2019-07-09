import React from 'react'

const Item = ({firstName, lastName, dateOfBirth}) => {
    return (<div className="item-row">
        <span>firstName</span>
        <span>lastName</span>
        <span>dateOfBirth</span>
    </div>)
}

export default Item