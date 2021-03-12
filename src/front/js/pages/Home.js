import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Destacados } from "../component/home/Destacados";
import { Jumbotron } from "../component/home/Jumbotron";
import { ComingSoon } from "../component/home/ComingSoon";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0">
			<Jumbotron />
			<h1>DESCRIPCION TANATOTURISMO</h1>
			<div className="fondoDestacados">
				<Destacados />
			</div>
			<div className="container">
				<ComingSoon />
			</div>
		</div>
	);
};
