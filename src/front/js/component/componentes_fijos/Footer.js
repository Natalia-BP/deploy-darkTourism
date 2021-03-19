import React, { Component } from "react";
import Logo_Bid from "../../../img/Logo_BID.png";

export const Footer = () => (
	<footer className="d-flex flex-column flex-md-row justify-content-around footer mt-auto py-5">
		<div className="col-md-2 text-center text-md-left">
			<ul className="indexList list-unstyled">
				<h3>Índice</h3>
				<li>
					<a href="#" className="text-decoration-none text-reset">
						Home
					</a>
				</li>
				<li>
					<a href="#" className="text-decoration-none text-reset">
						Lugares
					</a>
				</li>
			</ul>
		</div>

		<div className="col-md-2 text-center text-md-left">
			<ul className="list-unstyled list-inline">
				<h3>Síguenos</h3>
				<li className="list-inline-item mr-3">
					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-facebook-square" />
					</a>
				</li>
				<li className="list-inline-item mr-3">
					<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-instagram" />
					</a>
				</li>
				<li className="list-inline-item">
					<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-twitter-square" />
					</a>
				</li>
			</ul>
		</div>

		<div className="col-md-2 text-center text-md-left">
			<ul className="list-unstyled list-inline">
				<h3>Patrocinan</h3>
				<li className="list-inline-item mr-3">
					<img
						className="img-fluid"
						src="https://www.cinde.org/assets/about/cinde_es-86a023eee78752c33a35715fe05bc8fcfb9ffd6dcf68a4534b6084d061c796fb.svg"
						width="50px"
					/>
				</li>
				<li className="list-inline-item mr-3">
					<img
						className="img-fluid"
						src="https://www.micit.go.cr/sites/all/themes/micitt/logo.svg"
						width="50px"
					/>
				</li>
				<li className="list-inline-item">
					<img className="img-fluid" src={Logo_Bid} width="50px" />
				</li>
			</ul>
		</div>
	</footer>
);
