import './App.css';
import FilterBox from './components/filterComponent/filter';
import DataBox from './components/DataBox/DataBox';
import Switch from './components/Switch/Switch';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState('all');
  const [signal,setSignal] = useState([]);
  const [value,setValue] = useState('Card');
  const [query,setQuery]  = useState("");
  const [select,setSelect] = useState("");

  const fetchData=async()=>{
    return await axios.get
      ('https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ebf8fc0324832465d72f839cad2d9b640bb8137c/users.json')
      .then(res=>setData(res.data))
  };

  const filteredData = (data.filter((d)=>{
    if(status==='Active'){
      switch (signal){
        case 'Solid': return d.status === 'active' && d.signal ===3;
        case 'Good':return d.status === 'active' && (d.signal === 4 || d.signal===5);
        case 'Ok':return d.status === 'active' && (d.signal === 1 || d.signal===2);
      }
      return d.status==='active';
    } else if(status === 'Inactive'){
      switch (signal){
        case 'Solid': return d.status === 'inactive' && d.signal ===3;
        case 'Good':return d.status === 'inactive' && (d.signal === 4 || d.signal===5);
        case 'Ok':return d.status === 'inactive' && (d.signal === 1 || d.signal===2);
      }
      return d.status==='inactive'
    }else{
      switch (signal){
        case 'Solid': return d.signal ===3;
        case 'Good':return (d.signal === 4 || d.signal===5);
        case 'Ok':return (d.signal === 1 || d.signal===2);
      }
      return d;
    }
  }))


  const cardButtonHandler=()=>{
    setValue('Card');
    document.querySelector('.card').style.backgroundColor = '#0F60DA';    
    document.querySelector('.list').style.backgroundColor = '#D1E4FF';
  }

  const listButtonHandler=()=>{
    setValue('List')
    document.querySelector('.card').style.backgroundColor = '#D1E4FF';
    document.querySelector('.list').style.backgroundColor = '#0F60DA';
  }

  const selectHandler = (select)=>{
    setSelect(select)
    console.log(select)
  }
  const statusHandler = (status) => {
    setStatus(status)
  }

  const signalHandler = (newSignal)=>{
    setSignal(newSignal)
  }

  const searchHandler = (search) =>{
    setQuery(search)
  }

  useEffect(()=>{
    fetchData();
    // searchHandler();
  },[])

  return (
    <div className="App">
      <div className='card-list'>
        <button className='card' onClick={cardButtonHandler}>CARD</button>
        <button className='list' onClick={listButtonHandler}>LIST</button>
      </div>

      <div className='main-body'>
        <FilterBox statusHandler={statusHandler} signalHandler = {signalHandler} searchHandler={searchHandler} selectHandler={selectHandler}/>
        <DataBox value = {value} data={filteredData} image_source={select}/>
      </div>
    </div>
  );
}

export default App;
