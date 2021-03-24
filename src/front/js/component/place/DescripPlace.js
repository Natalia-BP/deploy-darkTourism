import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const DescripPlace = () => {
	const { store, actions } = useContext(Context);
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
						src="https://i.pinimg.com/originals/00/ff/fb/00fffbd93d57f8fab60a7769a87db9e8.jpg"
						className="imgDescrip rounded"
						width="200px"
						height="250px"
					/>
				</div>

				<div className="descrip_place back">
					<img
						src="https://www.ucr.ac.cr/medios/fotos/pri_x-large/2015/img_2990.jpg"
						className="imgDescrip rounded"
						width="250px"
					/>
				</div>
			</div>
		</div>
	);
};
