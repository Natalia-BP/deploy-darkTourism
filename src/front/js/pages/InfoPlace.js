import React, { useContext, useEffect } from "react";
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
	useEffect(() => {
		actions.fetchPlacesbyId(placeId.id);
	}, []);
	return (
		<div className="container-fluid px-0">
			<div className="container">
				<Carrusel />
			</div>
			<DescripPlace />
			<Map />
			<div className="container">
				<Comments />
				<FormComments />
			</div>
		</div>
	);
};
