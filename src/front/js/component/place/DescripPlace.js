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
					<h2 className="mb-3">{!!store.currentplace && store.currentplace.name_place}</h2>
					<p>{!!store.currentplace && store.currentplace.description}</p>
					<button
						onClick={() => {
							let data = {
								user_id: store.user_id,
								place_id: store.currentplace.id
							};
							actions.fetchPostFavorite(data);
						}}>
						<i className="fas fa-heart" />
					</button>
					{/* {!!store.currentplace && store.currentplace.average_stars} */}
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
