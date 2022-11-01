import React from "react";
import "./css/dataBox.css";
import Card from "../card/Card.js";
import List from "../list/List.js";

const DataBox = ({ data, value, query, image, image_source }) => {
  return (
    <div className="main-box">
      {value === "List" && <List data={data} query={query} />}
      {value === "Card" &&
        data.map((d, key) => (
          <Card
            key={key}
            data={d}
            image={image}
            query={query}
            image_source={image_source}
          />
        ))}
    </div>
  );
};

export default DataBox;
