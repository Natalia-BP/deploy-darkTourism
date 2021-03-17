import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo.png";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Navbar = () => {

=======
	const { store, actions } = useContext(Context);

	return (
<nav className="navbar navbar-expand-md justify-content-between">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
					<ul className="navbar-nav">
						<li className="nav-item active mr-2">
							<a className="nav-link text-reset" href="#">
								<Link className="linkTag" to="/">
									Home <span className="sr-only">Home</span>
								</Link>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-reset" href="#">
								Link
							</a>
						</li>
					</ul>
				</div>
				<div className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">
					<Link to="/">
						<img src={Logo} className="img-fluid" width="35px" />
					</Link>
				</div>
				<div className="navbar-collapse collapse dual-nav w-50 order-2">
					<ul className="nav navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link">
								<i className="fas fa-heart" />
							</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">
								<i className="far fa-user-circle" />
							</a>
							<div className="dropdown-menu dropdown-menu-right" href="">
								<a className="dropdown-item" type="button">
									<Link to="/signup" className="dropdown-item">
										Registrarse
									</Link>
								</a>
								<a className="dropdown-item" type="button">
									<Link to="/Login" className="dropdown-item">
										Ingresar
									</Link>
								</a>
								<a className="dropdown-item" type="button">
									<Link to="/passwordrecover" className="dropdown-item">
										Recuperar contraseña
									</Link>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
