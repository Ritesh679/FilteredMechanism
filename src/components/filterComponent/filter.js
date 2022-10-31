import React from "react";
import "./css/filter.css";

export default function FilterBox(props) {
  const handleSourceSelect = (event) => {
    props.selectHandler(event.target.value);
  };

  const handleSearch = (event) => {
    props.searchHandler(event);
  };

  const handleActiveStatus = (event) => {
    props.statusHandler(event.target.value);
  };

  const checkboxHandler = (event) => {
    const { name, checked } = event.target;
    props.signalHandler(name, checked);
  };

  return (
    <div className="filter-box">
      <h3 style={{ textAlign: "left", paddingLeft: "20px" }}>FILTER</h3>
      <input
        type="text"
        className="search-box"
        placeholder="Search"
        onChange={handleSearch}
      ></input>

      <div className="filter-choice">
        <div className="filter-status">
          <h4 style={{ width: "80px" }}>By status</h4>
          <div className="status-radio">
            <li>
              <input
                type="radio"
                id="active"
                name="active_status"
                value="active"
                onChange={handleActiveStatus}
              />
              <label htmlFor="active">Active</label>
              <br />
            </li>
            <li>
              <input
                type="radio"
                id="inactive"
                name="active_status"
                value="inactive"
                onChange={handleActiveStatus}
              />
              <label htmlFor="inactive">Inactive</label>
              <br />
            </li>
          </div>
        </div>

        <div className="filter-signal">
          <h4 style={{ width: "80px", height: "0" }}>By signal</h4>
          <div className="signal-checkbox">
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="solid"
                  value="Solid"
                  // checked={checkbox.categories.solid}
                  onChange={(e) => checkboxHandler(e)}
                />
                <label htmlFor="solid">Solid</label>
              </li>
              <li tabIndex={2}>
                <input
                  type="checkbox"
                  name="good"
                  value="Good"
                  // checked={checkbox.categories.good}
                  onChange={checkboxHandler}
                />
                <label htmlFor="good">Good</label>
              </li>
              <li tabIndex={3}>
                <input
                  type="checkbox"
                  name="ok"
                  value="Ok"
                  // checked={checkbox.categories.ok}
                  onChange={checkboxHandler}
                />
                <label htmlFor="Ok">Ok</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="source-filter">
        <h4>By Source</h4>
        <select
          id="source-select"
          name="source-select"
          className="source"
          onChange={handleSourceSelect}
        >
          <option value="google"> Google </option>
          <option value="facebook"> Facebook </option>
          <option value="linkedin"> LinkedIn </option>
          <option value="twitter"> Twitter </option>
          <option value="office365"> Office365 </option>
        </select>
      </div>
    </div>
  );
}
