import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";

export const DescripPlace = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container descrip_place background">
			<div className="stackImgs">
				<div className="text-description">
					<h2 className="mb-3">{!!store.currentplace && store.currentplace.name_place}</h2>
					<p>{!!store.currentplace && store.currentplace.description}</p>
					{/* {!!store.currentplace && store.currentplace.average_stars} */}
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
