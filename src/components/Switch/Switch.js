import React from 'react'
import './css/switch.css'

const Switch = () => {
  return (
    <label className='switch'>
        <input type='checkbox'/>
        <span className='slider'/>
    </label>
  )
}

export default Switch