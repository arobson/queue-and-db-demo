import React from 'react'

const Edit = ({employeeId, firstName, lastName, dateOfBirth, firstChanged, lastChanged, dobChanged, canEdit, create}) => {
    const firstCount = firstName.toString().length
    let firstWidth = firstCount < 1 ? 1 : firstCount
    const lastCount = lastName.toString().length
    let lastWidth = lastCount < 1 ? 1 : lastCount
    const dobCount = dateOfBirth.toString().length
    let dobWidth = dobCount < 1 ? 1 : dobCount

    return (
        <div className="edit-row">
            <label className='field-label' htmlFor='firstName'>first name</label>
            <input
                value={firstName}
                size={firstWidth}
                onChange={
                    (e) => {
                        e.target.changed = true
                        firstChanged(employeeId, e.target.value)
                    }
                }
            />

            <label className='field-label' htmlFor='lastName'>last name</label>
            <input
                value={lastName}
                size={lastWidth}
                onChange={
                    (e) => {
                        e.target.changed = true
                        lastChanged(employeeId, e.target.value)
                    }
                }
            />

            <label className='field-label' htmlFor='dateOfBirth'>date of birth</label>
            <input
                value={dateOfBirth}
                size={dobWidth}
                onChange={
                    (e) => {
                        e.target.changed = true
                        dobChanged(employeeId, e.target.value)
                    }
                }
            />
    </div>)
}

export default Edit