import './App.css';
import FilterBox from './components/filterComponent/filter';
import DataBox from './components/DataBox/DataBox';
import Switch from './components/Switch/Switch';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState('all');

  const fetchData=async()=>{
    return await axios.get
      ('https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ebf8fc0324832465d72f839cad2d9b640bb8137c/users.json')
      .then(res=>setData(res.data))
  };

  const filteredData = data.filter((d)=>{
    if(status==='Active'){
      return d.status==='active';
    } else if(status === 'Inactive'){
      return d.status==='inactive'
    }else{
      return d;
    }
  })
  const statusHandler = (status) => {
    // console.log(event.target.value)
    setStatus(status)
    console.log(status)
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="App">
      <div className='card-list'>
        <button className='card'>CARD</button>
        <button className='list'>LIST</button>
        {/* <Switch/> */}
      </div>

      <div className='main-body'>
        <FilterBox statusHandler={statusHandler}/>
        <DataBox data={filteredData}/>
      </div>
    </div>
  );
}

export default App;
