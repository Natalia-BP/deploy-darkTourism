import React from "react";
import "../../../styles/AllStyles.scss";
import { Link } from "react-router-dom";

export const Destacados = () => {
	return (
		<div>
			<div className="container pt-3">
				<h5 className="text-white mb-1 TitlDest">Destacados del mes</h5>
				<p className="text-white SubTitlDest">Explora los siguientes lugares</p>
				<div className="row justify-content-center">
					<div />
					<div className="col-auto">
						<div>
							<Link to="/infoplace">
								<img
									className="imgDest"
									src="https://maritzacartin.files.wordpress.com/2019/02/img_8526-1.jpg?w=300"
								/>
							</Link>
							<div>
								<h6 className="text-white mt-2 mb-0">Sanatorio Duran</h6>
								<p className="text-white locationDest fw-light">Cartago, Prusia</p>
							</div>
						</div>
					</div>
					<div className="col-auto">
						<div>
							<img
								className="imgDest"
								src="https://maritzacartin.files.wordpress.com/2019/02/img_8526-1.jpg?w=300"
							/>
							<div>
								<h6 className="text-white mt-2 mb-0">Sanatorio Duran</h6>
								<p className="text-white locationDest fw-light">Cartago, Prusia</p>
							</div>
						</div>
					</div>
					<div className="col-auto">
						<div>
							<img
								className="imgDest"
								src="https://maritzacartin.files.wordpress.com/2019/02/img_8526-1.jpg?w=300"
							/>
							<div>
								<h6 className="text-white mt-2 mb-0">Sanatorio Duran</h6>
								<p className="text-white locationDest fw-light">Cartago, Prusia</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
