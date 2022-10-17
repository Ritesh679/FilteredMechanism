import React, { useEffect, useState } from 'react'
import './css/dataBox.css'
import Card from '../card/Card.js'
import axios from 'axios'
import List from '../list/List.js'

const DataBox = ({data}) => {
  return (
    <div className='main-box'>
      <List data={data}/>
      {/* {data.map(((d,key)=>(
        <Card key ={key} fName={d.firstName} lName={d.lastName} signal={d.signal} status={d.status} photo={d.photos}/>
      )))} */}
    </div>
  )
}

export default DataBox;