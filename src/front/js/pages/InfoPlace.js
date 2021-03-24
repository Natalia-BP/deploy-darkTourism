import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

//Componentes
import { Context } from "../store/appContext";
import { Comments } from "../component/place/Comments";
import { FormComments } from "../component/place/FormComments";
import { Carrusel } from "../component/place/Carrusel";
import { DescripPlace } from "../component/place/DescripPlace";
import { Map } from "../component/place/Map";

export const InfoPlace = () => {
	const { store, actions } = useContext(Context);
	let placeId = useParams();
	useEffect(
		() => {
			actions.fetchPlacesbyId(placeId.id);
		},
		[placeId.id]
	);
	return (
		<div className="container-fluid px-0 infoPlace">
			<div className="container">
				<Carrusel />
				<DescripPlace />
				<h3 className="text-center mb-3">Ubicación</h3>
				<Map placeId={placeId.id} />

				<h3 className="text-center mb-3">Reviews</h3>
				{!!store.currentplace &&
					store.currentplace.scores.map(elem => {
						return (
							<Comments
								key={elem.id}
								review_comments={elem.review_comments}
								score={elem.score}
								user={elem.user}
							/>
						);
					})}
				<FormComments />
			</div>
		</div>
	);
};
