/* eslint-disable default-case */
import "./App.css";
import FilterBox from "./components/filterComponent/filter";
import DataBox from "./components/DataBox/DataBox";
import axios from "axios";
import { useEffect, useState } from "react";
import { isImgUrl } from "./util";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(null);
  const [signal, setSignal] = useState([]);
  const [value, setValue] = useState("Card");
  const [select, setSelect] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    return await axios
      .get(
        "https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ebf8fc0324832465d72f839cad2d9b640bb8137c/users.json"
      )
      .then((res) => setData(res.data));
  };

  const searchHandler = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };
  console.log(searchValue);
  let filteredData = [...data];

  if (status) {
    filteredData = filteredData.filter((d) => d.status === status);
  }
  if (signal && signal.length > 0) {
    filteredData = filteredData.filter((d) =>
      signal.includes(d.signal === 3 ? "solid" : d.signal > 3 ? "good" : "ok")
    );
  }
  if (searchValue && searchValue.trim !== "") {
    filteredData = filteredData.filter((d) =>
      d.firstName.toLowerCase().includes(searchValue)
    );
  }

  if (select) {
    filteredData = filteredData.filter((d) => {
      let x = d.photos.map((p) => p.source);
      let y = d.photos.filter((p) => p.source === select);
      if (x.includes(select)) {
        return d;
      }
    });
  }

  const selectHandler = (select) => {
    setSelect(select);
  };
  const statusHandler = (status) => {
    setStatus(status);
  };

  const signalHandler = (name, checked) => {
    console.log(name + " " + checked);
    checked && !signal.includes(name) && setSignal([...signal, name]);
    !checked && setSignal(signal.filter((s) => s !== name));
  };
  console.log(signal);

  useEffect(() => {
    fetchData();
  }, []);

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
