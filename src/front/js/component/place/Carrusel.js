import React from "react";
import PropTypes from "prop-types";

export const Carrusel = () => {
	return (
		<div
			id="carouselExampleFade"
			className="carousel slide carousel-fade"
			data-ride="carousel"
			data-interval="3000">
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
				<li data-target="#carouselExampleIndicators" data-slide-to="1" />
				<li data-target="#carouselExampleIndicators" data-slide-to="2" />
			</ol>
			<div className="carousel-inner rounded-pill">
				<div className="carousel-item active">
					<img
						src="https://elrincondelmae.files.wordpress.com/2015/05/isla-san-lucas-costa-rica.jpg"
						className="d-block w-100 rounded"
						alt="..."
						width="100px"
						height="500px"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://elrincondelmae.files.wordpress.com/2015/05/2242617_0.jpg"
						className="d-block w-100 rounded"
						alt="..."
						width="100px"
						height="500px"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://distritocarmen.vecinosactivos.news/wp-content/uploads/sites/3/2018/06/33138081115_3e239688f2_b.jpg"
						className="d-block w-100 rounded"
						alt="..."
						width="100px"
						height="500px"
					/>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
