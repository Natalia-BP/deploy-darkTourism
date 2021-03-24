import React from "react";
import PropTypes from "prop-types";
import profpic from "../../../img/prof_picPrueba.jpg";

export const Comments = props => {
	function getCurrentDate() {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${date} / ${month < 10 ? `0${month}` : `${month}`} / ${year}`;
	}

	return (
		<>
			<div className="userComments mb-4">
				<div className="comment px-4 pt-3 pb-1 rounded">
					<div className="header d-flex flex-row align-items-center justify-content-center justify-content-md-start">
						<div className="profPic mw-25">
							<img className="img-fluid rounded-circle mw-25" src={profpic} width="81px" />
						</div>
						<div className="username ml-3">
							<h4>{props.user}</h4>
						</div>
					</div>
					<hr className="bg-white rounded" />
					<div className="body">
						<p className="text-center text-md-left lead">{props.review_comments}</p>
						<div className="rating">Calificación: {props.score}</div>
					</div>
					<div className="footer text-right font-italic">
						<p className="text-center text-md-right small">{getCurrentDate()}</p>
					</div>
				</div>
			</div>
		</>
	);
};
