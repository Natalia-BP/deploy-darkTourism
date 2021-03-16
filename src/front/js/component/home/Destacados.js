import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

import "../../../styles/AllStyles.scss";
import { Link } from "react-router-dom";

export const Destacados = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlaces();
	}, []);
	return (
		<div>
			<div className="container pt-3">
				<h5 className="text-white mb-1 TitlDest">Destacados del mes</h5>
				<p className="text-white SubTitlDest">Explora los siguientes lugares</p>
				<div className="row justify-content-center">
					<div />
					{!!store.places &&
						store.places.map(place => {
							return (
								<div className="col-auto" key={place.id}>
									<div>
										<Link to={`/infoplace/${place.id}`}>
											<img className="imgDest" src={place.img} />
										</Link>
										<div>
											<h6 className="text-white mt-2 mb-0">{place.name_place}</h6>
											<p className="text-white locationDest fw-light">{place.location}</p>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
