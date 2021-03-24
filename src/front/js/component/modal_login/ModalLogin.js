import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Redirect, Link } from "react-router-dom";
import LoginGoogle from "../modal_login/LoginGoogle";
import LoginFacebook from "../modal_login/LoginFacebook";

export const ModalLogin = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("correo y contraseña son requeridos");
		}
		console.log(email, pass);

		// FETCH
		const data = { email: email, password: pass };

		fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				//console.log(data.Msg);
				if (data.Msg) {
					alert(data.Msg);
				} else {
					console.log(data);
					sessionStorage.setItem("u_token", data.token);
					sessionStorage.setItem("nick_name", data.user.nick_name);
					sessionStorage.setItem("user_id", data.user.id);
					actions.login();
					setRedirect(true);
				}
			});
	};

	return (
		<>
			<div className="bgImgForms container-fluid d-flex flex-column pt-5">
				<div className="py-5">
					<div className="formBgStyle container p-4 my-5 mx-auto rounded">
						<div className="text-center mt-3 d-flex justify-content-center align-items-center">
							<h1>Ingresa a tu cuenta</h1>
						</div>
						<div className="container d-flex justify-content-center align-items-center">
							{/* <LoginGoogle /> */}
							<LoginFacebook />
						</div>
						<br />
						<section className="mb-5 mt-4">
							<p className="lead text-center">o utiliza tu correo</p>
						</section>
						<div className="text-center d-flex justify-content-center align-items-center">
							<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
								<div className="form-floating mb-3">
									<label htmlFor="floatingInput">
										<i className="fas fa-envelope" /> Correo electrónico
									</label>
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="nombre@dominio.com"
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div className="form-floating">
									<label htmlFor="floatingPassword">
										<i className="fas fa-lock" /> Contraseña
									</label>

									<input
										type="password"
										className="form-control"
										id="floatingPassword"
										placeholder="Contraseña"
										onChange={e => setPass(e.target.value)}
									/>
								</div>

								<div className="form-row justify-content-end my-3">
									<Link className="linkTag text-right" to={"/passwordrecover"}>
										Forgot password?
									</Link>
								</div>

								<div className="form-row justify-content-center">
									<button type="submit" className="btn rounded-pill px-3 my-3">
										Ingresar
									</button>
								</div>
							</form>
							{redirect ? <Redirect to="/" /> : ""}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
