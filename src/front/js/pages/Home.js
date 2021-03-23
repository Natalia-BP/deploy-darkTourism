import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Destacados } from "../component/home/Destacados";
import { Jumbotron } from "../component/home/Jumbotron";
import { DescripHome } from "../component/home/DescripHome";
import { ComingSoon } from "../component/home/ComingSoon";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-0">
			<Jumbotron />
			<div className="fondoDestacados">
				<Destacados />
			</div>
			<DescripHome />
			<div className="container-fluid fondoCoomingSoon">
				<ComingSoon />
			</div>
		</div>
	);
};
