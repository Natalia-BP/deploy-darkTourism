import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

//Componentes
import { Context } from "../store/appContext";
import { Comments } from "../component/place/Comments";
import { FormComments } from "../component/place/FormComments";
// import { DescripHome } from "../component/home/DescripHome";
// import { ComingSoon } from "../component/home/ComingSoon";

export const InfoPlace = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0">
			<h1>Carrusel</h1>
			<h1>Descripción del lugar</h1>
			<h1>Mapa</h1>
			<div className="container">
				<Comments />
				<FormComments />
			</div>
		</div>
	);
};
