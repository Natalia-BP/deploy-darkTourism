import React from "react";

export const ComingSoon = () => {
	return (
		<div className="row px-4 pb-5 pt-3">
			<div className="column">
				<h1>Próximamente</h1>
			</div>
			<div className="col-imag float-right d-flex flex-column">
				<div className="column">
					<img
						src="https://i.pinimg.com/originals/3a/06/d4/3a06d441cef47d33fa60467af497644b.jpg"
						width="50%"
						height="50%"
						className="firts-photo"
					/>
					<img
						src="https://www.ucr.ac.cr/medios/fotos/pri_x-large/2015/img_2990.jpg"
						width="50%"
						height="50%"
						className="second-photo"
					/>
					<img
						src="https://elrincondelmae.files.wordpress.com/2015/05/salc3b3n-hospital-san-juan-de-dios-inicios-siglo-xx.png"
						width="50%"
						height="50%"
						className="third-photo"
					/>
				</div>
			</div>
		</div>
	);
};
