import React, { useState } from "react";
import "../../../styles/AllStyles.scss";
import { Link } from "react-router-dom";

export const Destacados = () => {
	const [info, setInfo] = useState([
		{
			id: 1,
			img: "https://maritzacartin.files.wordpress.com/2019/02/img_8526-1.jpg?w=300",
			name_place: "Sanatorio Duran",
			description: "Muy lindo",
			location: "Cartago, Prusia"
		},
		{
			id: 2,
			img: "https://maritzacartin.files.wordpress.com/2019/02/img_8526-1.jpg?w=300",
			name_place: "Sanatorio Pepito",
			description: "Muy asustador",
			location: "Cartago, Prusia"
		},
		{
			id: 3,
			img: "https://maritzacartin.files.wordpress.com/2019/02/img_8526-1.jpg?w=300",
			name_place: "Cementerio",
			description: "Está bien",
			location: "Cartago, San Jose"
		}
	]);
	return (
		<div>
			<div className="container pt-3">
				<h5 className="text-white mb-1 TitlDest">Destacados del mes</h5>
				<p className="text-white SubTitlDest">Explora los siguientes lugares</p>
				<div className="row justify-content-center">
					<div />
					{info.map(place => {
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
