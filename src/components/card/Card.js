import React, { useState } from 'react'
import './css/card.css'

function retrievePhoto(photo){
  photo.map(p=>{
    if(p.source==='google') return p.url  
    if(p.source==='linkedin') return p.url
    if(p.source==='facebook') return p.url
    if(p.source==='twitter') return p.url
    if(p.source==='office365') return p.url
  })
}

const Card = ({fName,lName,status,signal,photo}) => {
  return (
    <div className='wrapper'>
      <div className='data-card'>
        <div className='main-data'>
            <div className='profile'>
                <img className='image' src={retrievePhoto(photo)}/>          
                <h3 className='text'>{fName} {lName}</h3>
            </div>
            <div className='signal-box'>
                <button style={{backgroundColor:signal<3?'blue':signal=3?'yellow':signal>3?'green':0 ,color:signal<3?'white':'black'}} className='btn btn-primary' disabled>{signal>3?'GOOD':signal<3?'OK':'SOLID'}</button>
            </div>
        </div>
        <div className='vector'></div>
    </div>
    </div>
  )
}

export default Card