import React from 'react'

const Input = (props) => {
    const { label, name ,onChange, type, defaultValue } = props;
    let className='form-control';
    return (
        <div className="from-group">
            <label>{label}</label>
            <input name={name} type={type} className={className} onChange={onChange} defaultValue={defaultValue} />
            <div className="invalid-feedback">{props.error}</div>
        </div>
    )
}

export default Input;