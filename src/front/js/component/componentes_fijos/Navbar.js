import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link to="/" className="nav-link">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
				</ul>
				<div className="nav-logo mx-auto">
					<Link to="/">
						<img src={Logo} width="25px" />
					</Link>
				</div>
			</div>
			<div>
				<i className="fas fa-heart" />
			</div>
			<div />
			<div className="btn-group">
				<button
					type="button"
					className="btn btn-light dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="far fa-user-circle" />
				</button>
				<div className="dropdown-menu dropdown-menu-right">
					<button className="dropdown-item" type="button">
						<Link to="/signup" className="dropdown-item">
							Registrarse
						</Link>
					</button>
					<button className="dropdown-item" type="button">
						<Link to="/Login" className="dropdown-item">
							Ingresar
						</Link>
					</button>
					<button className="dropdown-item" type="button">
						<Link to="/passwordrecover" className="dropdown-item">
							Recuperar contraseña
						</Link>
					</button>
				</div>
			</div>
		</nav>
	);
};
