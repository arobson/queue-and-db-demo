import React from 'react'

const Edit = ({employeeId, firstName, lastName, dateOfBirth, firstChanged, lastChanged, dobChanged, canAdd, create}) => {
    const firstCount = firstName.toString().length
    let firstWidth = firstCount < 8 ? 8 : firstCount
    const lastCount = lastName.toString().length
    let lastWidth = lastCount < 7 ? 7 : lastCount
    const dobCount = dateOfBirth.toString().length
    let dobWidth = dobCount < 10 ? 10 : dobCount

    return (
        <div className="edit-row">
            <span className='field'>
                <label className='field-label' htmlFor='firstName'>first name</label>
                <input
                    value={firstName}
                    size={firstWidth}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            firstChanged(e.target.value)
                        }
                    }
                />
            </span>

            <span className='field'>
                <label className='field-label' htmlFor='lastName'>last name</label>
                <input
                    value={lastName}
                    size={lastWidth}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            lastChanged(e.target.value)
                        }
                    }
                />
            </span>

            <span className='field'>
                <label className='field-label' htmlFor='dateOfBirth'>date of birth</label>
                <input
                    value={dateOfBirth}
                    size={dobWidth}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            dobChanged(e.target.value)
                        }
                    }
                />
            </span>
            <span className='control'>
                <button
                    onClick={
                        (e) => {
                            create(employeeId, firstName, lastName, dateOfBirth)
                        }
                    }
                    disabled={!canAdd}
                >Add</button>
            </span>
    </div>)
}

export default Edit