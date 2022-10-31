import React, { useEffect, useState } from "react";
import "./css/card.css";

const Card = ({ data, image_source }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const priority = ["google", "facebook", "linkedIn", "twitter", "office365"];
    // eslint-disable-next-line array-callback-return
    data.photos.map((p) => {
      for (let i = 0; i <= priority.length; i++) {
        if (p.source === priority[i]) {
          setImage(p.url);
          break;
        }
      }
    });
  }, [data.photos]);

  return (
    <div className="data-card">
      <div className="main-data">
        <div className="profile">
          <img
            className="image"
            src={image}
            onError={(e) =>
              (e.target.src =
                "https://www.computerhope.com/jargon/g/guest-user.jpg")
            }
            alt={image_source ? "image_source" : "image_test"}
          />
          <h3 className="text">
            {data.fName} {data.lName}
          </h3>
        </div>
        <div className="signal-box">
          <button
            style={{
              backgroundColor:
                data.signal < 3
                  ? "blue"
                  : data.signal === 3
                  ? "yellow"
                  : data.signal > 3
                  ? "green"
                  : 0,
              color: data.signal < 3 ? "white" : "black",
            }}
            className="btn btn-primary"
            disabled
          >
            {data.signal > 3 ? "GOOD" : data.signal < 3 ? "OK" : "SOLID"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
