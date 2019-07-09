import React from 'react'

const Edit = ({
    employeeId, canUpdate, type, contact, original,
    typeChanged, contactChanged, change
}) => {
    return (
        <div className="address-fields">
            <span className='field'>
                <input
                    placeholder={original.type}
                    value={type}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            typeChanged(e.target.value)
                        }
                    }
                />
            </span>
            <span className='field'>
                <input
                    placeholder={original.contact}
                    value={contact}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            contactChanged(e.target.value)
                        }
                    }
                />
            </span>
            <span className='control'>
                <button
                    onClick={
                        (e) => {
                            change(employeeId, original, type, contact)
                        }
                    }
                    disabled={!canUpdate}
                >Change</button>
            </span>
    </div>)
}

export default Edit