import React from "react";
import "./css/list.css";
function showEmail(event) {
	console.log(event.target.value);
}
const List = ({ data }) => {
	return (
		<div className="container">
			<table className="list-data">
				<thead className="table-heading">
					<tr>
						<th style={{ width: "200px" }}>Name</th>
						<th style={{ width: "50px" }}>Signal</th>
						<th style={{ width: "100px" }}>active</th>
						<th style={{ width: "400px" }}>Email</th>
					</tr>
				</thead>
			</table>
			<hr />
			<table className="list-data">
				{data.map((d, index) => (
					<tbody key={index} className="table-data">
						<tr>
							<td style={{ width: "200px" }}>
								{d.firstName} {d.lastName}
							</td>
							<td
								style={{
									width: "50px",
									color:
										d.signal < 3
											? "#0F60DA"
											: d.signal > 3
											? "#00834C"
											: "#F3AD63",
								}}
							>
								{d.signal < 3 ? "OK" : d.signal > 3 ? "GOOD" : "SOLID"}
							</td>
							<td style={{ width: "100px" }}>
								<button
									style={{
										backgroundColor:
											d.status === "active" ? "#EEF8E2" : "#FFE6E6",
										color: d.status === "active" ? "#809C5D" : "#F64D4F",
									}}
									className="status-btn"
								>
									{d.status}
								</button>
							</td>
							<td style={{ width: "400px" }} className="emails">
								{d.emails.length === 1 && <p>{d.emails}</p>}
								{d.emails.length > 1 && (
									<div>
										<p>
											{d.emails[0]}{" "}
											<button
												onMouseDown={showEmail}
												value={d.firstName}
												className="email-add"
											>
												+{d.emails.length - 1}
											</button>
										</p>
									</div>
								)}
							</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	);
};

export default List;
