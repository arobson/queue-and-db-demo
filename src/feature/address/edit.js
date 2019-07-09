import React from 'react'

const Edit = ({
    employeeId, canUpdate, address, line1, line2, 
    province, region, country, postal, 
    line1Changed, line2Changed, provinceChanged, 
    regionChanged, countryChanged, postalChanged,
    change
}) => {
    return (
        <div className="address-fields">
            <span className='field'>
                <input
                    placeholder={address.line1}
                    value={line1}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            line1Changed(e.target.value)
                        }
                    }
                />
            </span>
            <span className='field'>
                <input
                    placeholder={address.line2}
                    value={line2}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            line2Changed(e.target.value)
                        }
                    }
                />
            </span>
            <span className='field'>
                <input
                    placeholder={address.province}
                    value={province}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            provinceChanged(e.target.value)
                        }
                    }
                />
            </span>
            <span className='field'>
                <input
                    placeholder={address.region}
                    value={region}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            regionChanged(e.target.value)
                        }
                    }
                />
            </span>
            <span className='field'>
                <input
                    placeholder={address.country}
                    value={country}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            countryChanged(e.target.value)
                        }
                    }
                />
            </span>
            <span className='field'>
                <input
                    placeholder={address.postal}
                    value={postal}
                    size={25}
                    onChange={
                        (e) => {
                            e.target.changed = true
                            postalChanged(e.target.value)
                        }
                    }
                />
            </span>
            <span className='control'>
                <button
                    onClick={
                        (e) => {
                            change(employeeId, address, line1, line2,
                                province, region, country, postal)
                        }
                    }
                    disabled={!canUpdate}
                >Change</button>
            </span>
    </div>)
}

export default Edit