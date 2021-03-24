import React from "react";

export const ComingSoon = () => {
	return (
		<div className="comingSoon py-4">
			<div className="vertical">
				<h1 className="text-focus-in">Próximamente</h1>
			</div>
			<div className="grid-container">
				<div className="item2 itemall">
					<img
						src="https://i.pinimg.com/originals/3a/06/d4/3a06d441cef47d33fa60467af497644b.jpg"
						className="onephoto"
					/>
				</div>
				<div className="tinyGrid">
					<div className="img-float">
						<div className="item3 itemall">
							<img
								src="https://www.ucr.ac.cr/medios/fotos/pri_x-large/2015/img_2990.jpg"
								className="twophoto"
							/>
						</div>
						<div className="item4 itemall">
							<img
								src="https://elrincondelmae.files.wordpress.com/2015/05/salc3b3n-hospital-san-juan-de-dios-inicios-siglo-xx.png"
								className="twophoto"
							/>
						</div>
					</div>
					<div className="item5 itemall">
						<img
							src="https://s3.amazonaws.com/timdotcreek.com/uploads/photo/image/5bdb773f57be64533aba7bb1/Venado_Cave__Arenal.jpg"
							className="lastphoto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
