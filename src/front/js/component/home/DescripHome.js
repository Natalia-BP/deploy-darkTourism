import React, { Component } from "react";
import imgDescrip1 from "../../../img/img_descrip3.jpg";
import imgDescrip2 from "../../../img/img_descrip.jpg";

export const DescripHome = () => {
	return (
		<>
			<div className="descripTurismo">
				<div className="stackImgs">
					<div className="stackImg_item front">
						<img src={imgDescrip2} className="imgDescrip rounded-sm" width="220px" />
					</div>

					<div className="stackImg_item back">
						<img src={imgDescrip1} className="imgDescrip rounded-sm" width="360px" />
					</div>

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
