import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo.png";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchGetFavorite();
	}, []);

	return (
		<nav className="navbar navbar-expand-md justify-content-between">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
					<ul className="navbar-nav">
						<li className="nav-item mr-2">
							<a className="nav-link text-reset" href="#">
								<Link className="linkTag" to="/">
									Home <span className="sr-only">Home</span>
								</Link>
							</a>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link text-reset" href="#">
								Link
							</a>
						</li> */}
					</ul>
				</div>
				<div className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">
					<Link to="/">
						<img src={Logo} className="img-fluid" width="35px" />
					</Link>
				</div>
				<div className="navbar-collapse collapse dual-nav w-50 order-2">
					<ul className="nav navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">
								<i className="fas fa-heart heartbeat" />
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								{store.user_id == null ? (
									<a className="nav-link">¡Debes ingresar a una cuenta para agregar favoritos!</a>
								) : store.favoritePlaces.length > 0 ? (
									store.favoritePlaces.map(elem => {
										return (
											<Link
												key={elem.id}
												to={`/infoplace/${elem.place_id}`}
												className="dropdown-item">
												{elem.place_name}
											</Link>
										);
									})
								) : (
									<a className="nav-link">No has registrado favoritos</a>
								)}
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">
								<i className="far fa-user-circle" />
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								{store.user_id == null ? (
									<>
										<a className="dropdown-item">
											<Link to="/signup" className="dropdown-item">
												Registrarse
											</Link>
										</a>
										<a className="dropdown-item">
											<Link to="/Login" className="dropdown-item">
												Ingresar
											</Link>
										</a>
									</>
								) : (
									<>
										<a className="dropdown-item" type="button">
											<div
												className="dropdown-item"
												onClick={() => {
													console.log("Haciendo click");
													actions.logout();
												}}>
												Logout
											</div>
											{store.redirect_logout ? <Redirect to="/" /> : null}
										</a>
									</>
								)}
								<div className="dropdown-divider" />
								<a className="dropdown-item">
									<Link to="/passwordrecover" className="dropdown-item">
										¿Olvidaste tu contraseña?
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
