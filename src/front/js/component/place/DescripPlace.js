import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const DescripPlace = props => {
	const { store, actions } = useContext(Context);
	const descrip_photo = {
		photos: {
			photo1: "https://i.pinimg.com/originals/3a/06/d4/3a06d441cef47d33fa60467af497644b.jpg",
			photo2:
				"https://elrincondelmae.files.wordpress.com/2015/05/salc3b3n-hospital-san-juan-de-dios-inicios-siglo-xx.png"
		}
	};
	return (
		<div className="container descrip_place background">
			<div className="stackImgs">
				<div className="text-description">
					<section className="header d-flex align-items-center">
						<h2 className="font-weight-bold mb-3 d-inline">
							{!!store.currentplace && store.currentplace.name_place}
						</h2>
						<button
							type="button"
							className="btn d-inline ml-3"
							data-toggle="tooltip"
							data-placement="top"
							title="Agrégalo a tus favoritos"
							onClick={() => {
								let data = {
									user_id: store.user_id,
									place_id: store.currentplace.id
								};
								actions.fetchPostFavorite(data);
							}}>
							<i className="fas fa-heart" />
						</button>
					</section>
					<p className="lead">{!!store.currentplace && store.currentplace.description}</p>
					<h4 className="d-inline">Calificación: </h4>
					<p className="d-inline">{!!store.currentplace && store.currentplace.average_stars}</p>
				</div>
				<div className="descrip_place front">
					<img
						src={descrip_photo.photos["photo" + props.placeId]}
						className="imgDescrip rounded"
						width="200px"
						height="250px"
					/>
				</div>

				<div className="descrip_place back">
					<img
						src={descrip_photo.photos["photo" + props.placeId]}
						className="imgDescrip rounded"
						width="250px"
					/>
				</div>
			</div>
		</div>
	);
};

DescripPlace.propTypes = {
	placeId: PropTypes.number
};
