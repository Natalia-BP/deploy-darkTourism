import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo.png";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	// console.log(nick_name);
	return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 89f5027309359fc8715838238d664a065a4aad1b
					<Link to="/">
						<img src={Logo} className="img-fluid" width="35px" />
					</Link>
				</div>
<<<<<<< HEAD
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
					<button className="dropdown-item" type="button">
						Usuario: {store.actual_user && `${nick_name}`}
						<div
							className="dropdown-item"
							onClick={() => {
								actions.logout();
							}}>
							Logout
						</div>
						{store.redirect_logout ? <Redirect to="/" /> : null}
					</button>
=======
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
>>>>>>> 89f5027309359fc8715838238d664a065a4aad1b
				</div>
			</div>
		</nav>
	);
};
