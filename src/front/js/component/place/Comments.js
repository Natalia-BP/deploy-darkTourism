import React from "react";
import PropTypes from "prop-types";
import profpic from "../../../img/prof_picPrueba.jpg";

export const Comments = () => {
	return (
		<>
			<div className="userComments">
				<div className="comment px-4 pt-3 pb-1 rounded">
					<div className="header d-flex flex-row align-items-center justify-content-center justify-content-md-start">
						<div className="profPic mw-25">
							<img className="img-fluid rounded-circle mw-25" src={profpic} width="81px" />
						</div>
						<div className="username ml-3">
							<h4>DonSata90</h4>
						</div>
					</div>
					<hr className="bg-white rounded" />
					<div className="body">
						<p className="text-center text-md-left">Me encantó el sanatorio, muy feliz</p>
						<div className="rating" />
					</div>
					<div className="footer text-right font-italic">
						<p className="text-center text-md-right">Miérc. 10 de Marzo, 2021</p>
					</div>
				</div>
			</div>
		</>
	);
};
