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
		<>
			<div className="container pt-3">
				<div className="row row-cols-1">
					<div className="col">
						<h5 className="text-white font-weight-bold mb-0">Destacados del mes</h5>
						<p className="text-white">Explora los siguientes lugares</p>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-3 justify-content-around">
					{!!store.places &&
						store.places.map(place => {
							return (
								<div className="col" key={place.id}>
									<div className="sameSizeImgs">
										<Link to={`/infoplace/${place.id}`}>
											<img className="imgDest img-fluid rounded" src={place.img} />
										</Link>
									</div>
									<div>
										<h6 className="text-white font-weight-bold mt-2 mb-0">{place.name_place}</h6>
										<p className="text-white locationDest font-weight-light">{place.location}</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};
