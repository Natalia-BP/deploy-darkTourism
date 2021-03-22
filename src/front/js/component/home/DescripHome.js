import React, { Component } from "react";
// import blue from "../../../img/blue.jpg";
import img_descrip1 from "../../../img/img_descrip1.jpg";
import img_descrip2 from "../../../img/img_descrip2.jpg";

export const DescripHome = () => {
	return (
		<>
			<div className="descripTurismo">
				<div className="stackImgs">
					<div className="stackImg_item front">
						<img src={img_descrip2} className="imgDescrip" width="200px" />
					</div>

					<div className="stackImg_item back">
						<img src={img_descrip1} className="imgDescrip" width="360px" />
					</div>

					{/* <div className="stackImg_item background">
						<img src={blue} className="imgDescrip" width="600px" />
					</div> */}
					<div className="textTurismo">
						<h2 className="mb-3">Tanatoturismo</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
