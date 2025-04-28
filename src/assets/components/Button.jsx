import React from 'react'

const Button = ({text,icon,onClick,className}) => {
  return (
    
    <button
    onClick={onClick}
    className={`flex gap-2 items-center px-4 py-2 rounded hover:opacity-90 transition ${className}`}>
    {icon && <span>{icon}</span>}
    {text}
  </button>
  
  )
}

export default Button