import React from "react";
import PropTypes from "prop-types";

export const DescripPlace = () => {
	return (
		<div className="container descrip_place background">
			<div className="stackImgs">
				<div className="text-description">
					<h2 className="mb-3">Sanatorio Durán</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<i className="fas fa-star" />
					<i className="far fa-star" />
					<i className="far fa-star" />
					<i className="far fa-star" />
					<i className="far fa-star" />
				</div>
				<div className="descrip_place front">
					<img
						src="https://i.pinimg.com/originals/00/ff/fb/00fffbd93d57f8fab60a7769a87db9e8.jpg"
						className="imgDescrip rounded"
						width="200px"
						height="250px"
					/>
				</div>

				<div className="descrip_place back">
					<img
						src="https://www.ucr.ac.cr/medios/fotos/pri_x-large/2015/img_2990.jpg"
						className="imgDescrip rounded"
						width="250px"
					/>
				</div>
			</div>
		</div>
	);
};
