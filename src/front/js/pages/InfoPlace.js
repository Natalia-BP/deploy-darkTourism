import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

//Componentes
import { Context } from "../store/appContext";
import { Comments } from "../component/place/Comments";
import { FormComments } from "../component/place/FormComments";
// import { DescripHome } from "../component/home/DescripHome";
// import { ComingSoon } from "../component/home/ComingSoon";
import { Carrusel } from "../component/place/Carrusel";
import { DescripPlace } from "../component/place/DescripPlace";
import { Map } from "../component/place/Map";

export const InfoPlace = () => {
	const { store, actions } = useContext(Context);
	let placeId = useParams();

	return (
		<div className="container-fluid px-0">
			<h1>Carrusel</h1>
			<div className="container">
				<Carrusel />
			</div>
			<h1>Descripción del lugar</h1>
			<DescripPlace />
			<h1>Mapa</h1>
			<Map />
			<div className="container">
				<Comments />
				<FormComments />
			</div>
		</div>
	);
};
