import React, { useEffect, useState } from 'react'
import './css/filter.css'

export default function FilterBox(props) {

  const [search,setSearch] = useState('');
  const [select,setSelect] = useState('google');

  // const filter = props.data.map(d=>{if (d.firstName.includes(search)) return d.firstName})
  // console.log(filter)

  const handleSourceSelect =(event)=>{
    props.selectHandler(event.target.value);
  }

  const handleSearch = (event)=>{
    props.searchHandler(event.target.value)
  }

  const handleActiveStatus =(event)=>{
    props.statusHandler(event.target.value);
  }

  const checkboxHandler = (event)=>{
    let checked = event.target.checked;
    props.signalHandler(checked && event.target.value);
  }

  return (
    <div className='filter-box'>

      <h3 style={{textAlign:'left',paddingLeft:'20px'}}>FILTER</h3>
      <input type='text' className='search-box' placeholder='Search' onChange={handleSearch}></input>

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
            <ul>
            <li><input type='checkbox' name='filter-by' value='Solid' onChange={checkboxHandler}/>
            <label htmlFor = 'solid'>Solid</label></li>
            <li tabIndex={2}><input type='checkbox' name='filter-by-good' value='Good' onChange={checkboxHandler}/>
            <label htmlFor = 'good'>Good</label></li>
            <li tabIndex={3}><input type='checkbox' name='filter-by' value='Ok' onChange={checkboxHandler}/>
            <label htmlFor = 'Ok'>Ok</label></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='source-filter'>
        <h4>By Source</h4>
        <select id = 'source-select' name = 'source-select' className='source' onChange={handleSourceSelect}>
          <option value='google' >  Google </option>
          <option  value='facebook' >  Facebook </option>
          <option  value='linkedin' >  LinkedIn </option>
          <option  value='twitter' >  Twitter </option>
          <option  value='office365' >  Office365 </option>
        </select>
      </div>
    </div>
  )
}
