import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Comments } from "../component/place/Comments";
// import { Jumbotron } from "../component/home/Jumbotron";
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
			</div>
			<h1>Formulario de Comentarios</h1>
		</div>
	);
};
