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
<<<<<<< HEAD
			<div className="container">
=======
			<div className="container-fluid fondoDestacados">
>>>>>>> 9fc6a1fd9a7df3581573c67746b56bfe7f405df9
				<ComingSoon />
			</div>
		</div>
	);
};
