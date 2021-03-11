import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Destacados } from "../component/home/Destacados";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h1>JUMBOTRON</h1>
			<h1>DESCRIPCION TANATOTURISMO</h1>
			<div className="fondoDestacados">
				<Destacados />
			</div>
			<h1>GRID IMAGS</h1>
		</div>
	);
};
