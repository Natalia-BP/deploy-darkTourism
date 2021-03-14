import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";

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

		fetch("https://3001-fuchsia-ox-0aqrp8qt.ws-us03.gitpod.io/api/login", {
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
					<h1>Ingrese a su cuenta para comentar</h1>
					<br />
				</div>
			</div>
			<div className="text-center mt-5 d-flex justify-content-center align-items-center">
				<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="nombre@dominio.com"
							onChange={e => setEmail(e.target.value)}
						/>
						<label htmlFor="floatingInput">Dirección de correo electrónico</label>
					</div>
					<div className="form-floating">
						<input
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Contraseña"
							onChange={e => setPass(e.target.value)}
						/>
						<label htmlFor="floatingPassword">Contraseña</label>
					</div>
					<input type="submit" className="btn btn-primary" value="Login" />
				</form>
				{redirect ? <Redirect to="/" /> : ""}
			</div>
		</>
	);
};
