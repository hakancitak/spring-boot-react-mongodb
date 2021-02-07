import React from 'react'

 const ButtonWithProgress = props => {
    const { onClick, text, className ,value,buttonIcon,type} = props;
    return (
      <button className={className || 'btn btn-primary'} onClick={onClick} value={value} type={type}>
        <i className={buttonIcon}></i>
       {text}
         </button>
    )
}
export default ButtonWithProgress;