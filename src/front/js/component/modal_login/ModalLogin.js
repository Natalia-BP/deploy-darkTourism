import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
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

		fetch("https://3001-red-owl-34j40oxe.ws-us03.gitpod.io/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log(data.Msg);
				if (data.Msg) {
					alert(data.Msg);
				} else {
					sessionStorage.setItem("u_token", data.token);
					sessionStorage.setItem("nick_name", data.user.nick_name);
					sessionStorage.setItem("user_id", data.user.uid);
					actions.login();
					setRedirect(true);
				}
			});
	};

	return (
		<>
			<div className="container text-center mt-5 d-flex justify-content-center align-items-center">
				<div className="row">
					<h1>Login</h1>
					<br />
				</div>
			</div>
			<div className="container text-center mt-1 d-flex justify-content-center align-items-center">
				<LoginGoogle />
				<LoginFacebook />
			</div>
			<br />
			<h6 id="or">Or use your email</h6>
			<div className="text-center mt-3 d-flex justify-content-center align-items-center">
				<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
					<div className="form-floating mb-3">
						<i className="fas fa-envelope" />
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="nombre@dominio.com"
							onChange={e => setEmail(e.target.value)}
						/>
						{/* <label htmlFor="floatingInput">Dirección de correo electrónico</label> */}
					</div>
					<div className="form-floating">
						<i className="fas fa-lock" />
						<input
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Contraseña"
							onChange={e => setPass(e.target.value)}
						/>
						{/* <label htmlFor="floatingPassword">Contraseña</label> */}
					</div>
					<input type="submit" className="btn btn-primary mt-3 mb-3" value="Login" />
				</form>
				{redirect ? <Redirect to="/" /> : ""}
			</div>
		</>
	);
};
