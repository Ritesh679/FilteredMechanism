import React from "react";
import "./css/dataBox.css";
import Card from "../card/Card.js";
import List from "../list/List.js";

const DataBox = ({ data, value, query, image_source }) => {
  return (
    <div className="main-box">
      {value === "List" && <List data={data} query={query} />}
      {value === "Card" &&
        data.map((d, key) => (
          <Card
            key={key}
            fName={d.firstName}
            lName={d.lastName}
            signal={d.signal}
            status={d.status}
            photo={d.photos}
            query={query}
            image_source={image_source}
          />
        ))}
    </div>
  );
};

export default DataBox;
