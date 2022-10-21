import React, { useEffect, useState } from "react";
import "./css/card.css";
const Card = ({ fName, lName, signal, photo, image_source }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const priority = ["google", "facebook", "linkedIn", "twitter", "office365"];
    // eslint-disable-next-line array-callback-return
    photo.map((p) => {
      for (let i = 0; i <= priority.length; i++) {
        if (p.source === priority[i]) {
          setImage(p.url);
          break;
        }
      }
    });
  }, [photo]);

  return (
    <div className="wrapper">
      <div className="data-card">
        <div className="main-data">
          <div className="profile">
            <img className="image" src={image} alt="image_test" />
            <h3 className="text">
              {fName} {lName}
            </h3>
          </div>
          <div className="signal-box">
            <button
              style={{
                backgroundColor:
                  signal < 3
                    ? "blue"
                    : (signal = 3 ? "yellow" : signal > 3 ? "green" : 0),
                color: signal < 3 ? "white" : "black",
              }}
              className="btn btn-primary"
              disabled
            >
              {signal > 3 ? "GOOD" : signal < 3 ? "OK" : "SOLID"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
