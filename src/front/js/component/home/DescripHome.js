import React, { Component } from "react";
// import blue from "../../../img/blue.jpg";
import caution from "../../../img/caution.jpg";
import house from "../../../img/House.jpg";

export const DescripHome = () => {
	return (
		<>
			<div className="descripTurismo">
				<div className="stackImgs">
					<div className="stackImg_item front">
						<img src={house} className="imgDescrip" width="250px" />
					</div>

					<div className="stackImg_item back">
						<img src={caution} className="imgDescrip" width="360px" />
					</div>

					{/* <div className="stackImg_item background">
						<img src={blue} className="imgDescrip" width="600px" />
					</div> */}
					<div className="textTurismo">
						<h2 className="mb-3">Tanatoturismo</h2>
						<p className="mb-5">
							“Turismo oscuro” es una forma de turismo que envuelve a los viajes a sitios asociados con la
							muerte, la tragedia, lo misterioso y desconocido. La importancia de estos lugares no se debe
							a las asociaciones relacionadas con la muerte y el sufrimiento,​ sino principalmente a su
							valor histórico.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
