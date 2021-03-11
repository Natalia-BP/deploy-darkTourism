import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h1>JUMBOTRON</h1>
			<h1>DESCRIPCION TANATOTURISMO</h1>
			<h1>LUGARES DESTACADOS</h1>
			<h1>GRID IMAGS</h1>
		</div>
	);
};
