import React from 'react'

const Button = ({onClick, isDisable, label, filled}) => {
  return (
    <button
    onClick={onClick}
    disabled={isDisable}
    aria-label={label}
    className={filled ? 'button active' : 'button'}
    type='button'
    />
        
  )
}

export default Button