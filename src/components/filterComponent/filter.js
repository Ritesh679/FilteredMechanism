import React from 'react'
import './css/filter.css'

export default function FilterBox(props) {
  const handleActiveStatus =(event)=>{
    // console.log(event.target.value)
    props.statusHandler(event.target.value);
  }
  return (
    <div className='filter-box'>
      <h3 style={{textAlign:'left',paddingLeft:'20px'}}>FILTER</h3>
      <input type='text' className='search-box' placeholder='Search'></input>
      <div className='filter-choice'>
        
        <div className='filter-status'>
          <h4 style={{width:'80px'}}>By status</h4>
          <div className='status-radio'>
            <li><input type="radio" id="active" name="active_status" value="Active" onChange={handleActiveStatus}/>
            <label htmlFor="active">Active</label><br/></li>
            <li><input type="radio" id="inactive" name="active_status" value="Inactive" onChange={handleActiveStatus}/>
            <label htmlFor="inactive">Inactive</label><br/></li>
            <li><input type="radio" id="all" name="active_status" value="All" onChange={handleActiveStatus}/>
            <label htmlFor="all">All</label><br/></li>
          </div>
        </div>

        <div className='filter-signal'>
          <h4 style={{width:'80px',height:'0'}}>By signal</h4>
          <div className='signal-checkbox'>
            <li><input type='checkbox' name='filter-by' value='Solid'/>
            <label htmlFor = 'solid'>Solid</label></li>
            <li><input type='checkbox' name='filter-by-good' value='Good'/>
            <label htmlFor = 'good'>Good</label></li>
            <li><input type='checkbox' name='filter-by' value='Ok'/>
            <label htmlFor = 'Ok'>Ok</label></li>
          </div>
        </div>
      </div>
      <div className='source-filter'>
        <h4>By Source</h4>
      </div>
    </div>
  )
}
