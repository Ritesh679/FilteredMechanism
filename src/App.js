/* eslint-disable default-case */
import "./App.css";
import FilterBox from "./components/filterComponent/filter";
import DataBox from "./components/DataBox/DataBox";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { testImage } from "./util";

let priorityList = ["google", "facebook", "linkedin", "twitter", "office365"];

function App() {
	const [data, setData] = useState([]);
	const [status, setStatus] = useState(null);
	const [signal, setSignal] = useState([]);
	const [value, setValue] = useState("Card");
	const [select, setSelect] = useState("");
	const [searchValue, setSearchValue] = useState("");

	const [priorityData, setPriorityData] = useState([]);

	const fetchData = async () => {
		return await axios
			.get(
				"https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ebf8fc0324832465d72f839cad2d9b640bb8137c/users.json"
			)
			.then((res) => setData(res.data));
	};

	let filteredData = [];

	const newList = useMemo(() => {
		return [...data].map((d) => {
			let x = d.photos.map((p) => p);
			let sortedSource = x.sort(function (a, b) {
				return priorityList.indexOf(a.source) - priorityList.indexOf(b.source);
			});
			if (
				sortedSource[0].source &&
				!priorityData.includes(sortedSource[0].source)
			) {
				setPriorityData(
					[...priorityData, sortedSource[0].source].sort(function (a, b) {
						return (
							priorityList.indexOf(a.source) - priorityList.indexOf(b.source)
						);
					})
				);
			}
			return sortedSource.filter((s) => testImage(s.url));
		});
	}, [data, priorityData]);
	for (let i = 0; i < data.length; i++) {
		filteredData.push(data[i]);
		data[i].photos = newList[i];
	}

	const searchHandler = (event) => {
		const value = event.target.value;
		setSearchValue(value);
	};

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
		filteredData = filteredData.filter(
			(d) => d.photos[0].source === select.toLowerCase()
		);
	}

	const selectHandler = (select) => {
		setSelect(select);
	};
	const statusHandler = (status) => {
		setStatus(status);
	};

	const signalHandler = (name, checked) => {
		checked && !signal.includes(name) && setSignal([...signal, name]);
		!checked && setSignal(signal.filter((s) => s !== name));
	};

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
					priorityList={priorityData}
				/>
				<DataBox value={value} data={filteredData} image_source={select} />
			</div>
		</div>
	);
}

export default App;
