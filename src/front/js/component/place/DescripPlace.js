import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const DescripPlace = () => {
	const { store, actions } = useContext(Context);
	const descrip_photo = {
		photos: {
			photo1:
				"https://2.bp.blogspot.com/-lrpX61fe8sA/V9I5GwWNcXI/AAAAAAAABz0/O4VtmV6_xV0zBjDX5rSEhnZpBAfsLX50gCLcB/s1600/DSC01231.JPG",
			photo2:
				"https://www.lanacion.com.py/resizer/vOUjmx5Dl4nL83OX5xzkyMCqC0o=/fit-in/1000x800/smart/cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/LEANJUJSANA45H2LC376ZAJE2Y.jpg"
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
						src={descrip_photo.photos["photo1"]}
						className="imgDescrip rounded"
						width="200px"
						height="250px"
					/>
				</div>

				<div className="descrip_place back">
					<img src={descrip_photo.photos["photo2"]} className="imgDescrip rounded" width="250px" />
				</div>
			</div>
		</div>
	);
};
