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
		<div className="container-fluid">
			<Carrusel />
			<div className="container-md">
				<DescripPlace />
				<Map placeId={placeId.id} />
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
