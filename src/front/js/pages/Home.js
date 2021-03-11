import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Destacados } from "../component/home/Destacados";
import { Jumbotron } from "../component/home/Jumbotron";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0">
			<Jumbotron />
			<h1>DESCRIPCION TANATOTURISMO</h1>
			<div className="fondoDestacados">
				<Destacados />
			</div>
			<h1>GRID IMAGS</h1>
		</div>
	);
};
