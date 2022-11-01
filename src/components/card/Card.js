import React from "react";
import "./css/card.css";

const Card = ({ data, image_source }) => {
	return (
		<div
			className="data-card"
			style={{
				backgroundColor: data.status === "active" ? "#6ccca5" : "#d3d3d3",
			}}
		>
			<div className="main-data">
				<div className="profile">
					<img
						className="image"
						src={data.photos[0].url}
						alt={image_source ? "image_source" : "image_test"}
					/>
					<h3 className="text">
						{data.firstName} {data.lastName}
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
