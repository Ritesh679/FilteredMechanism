/* eslint-disable default-case */
import "./App.css";
import FilterBox from "./components/filterComponent/filter";
import DataBox from "./components/DataBox/DataBox";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("all");
  const [signal, setSignal] = useState([]);
  const [value, setValue] = useState("Card");
  const [select, setSelect] = useState("");

  const fetchData = async () => {
    return await axios
      .get(
        "https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ebf8fc0324832465d72f839cad2d9b640bb8137c/users.json"
      )
      .then((res) => setData(res.data));
  };

  const searchHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    let variable = data.filter((d) =>
      d.firstName.toLowerCase().includes(value)
    );
    setData(variable);
    console.table(variable);
  };
  const filteredData =
    status === "Active"
      ? data.filter((d) => d.status === "active")
      : status === "Inactive"
      ? data.filter((d) => d.status === "inactive")
      : data;

  const selectHandler = (select) => {
    setSelect(select);
  };
  const statusHandler = (status) => {
    setStatus(status);
  };

  const signalHandler = (event) => {
    const { value, checked } = event.target;
    console.log(`${value} is ${checked}`);
    if (checked) setSignal([...signal, value]);
    else setSignal(signal.filter((event) => event !== value));
    console.log(signal);
  };

  useEffect(() => {
    // searchHandler();
    fetchData();
  }, [filteredData, signal]);

  return (
    <div className="App">
      <div className="card-list">
        <button
          style={{
            backgroundColor: `${value}` !== "Card" ? "#D1E4FF" : "#0F60DA",
          }}
          className="card"
          onClick={() => setValue("Card")}
        >
          CARD
        </button>
        <button
          style={{
            backgroundColor: `${value}` === "List" ? "#0F60DA" : "#D1E4FF",
          }}
          className="list"
          onClick={() => setValue("List")}
        >
          LIST
        </button>
      </div>

      <div className="main-body">
        <FilterBox
          statusHandler={statusHandler}
          signalHandler={signalHandler}
          selectHandler={selectHandler}
          searchHandler={searchHandler}
        />
        <DataBox value={value} data={filteredData} image_source={select} />
      </div>
    </div>
  );
}

export default App;
