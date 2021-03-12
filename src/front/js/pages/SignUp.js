import React, { useState } from "react";
//import { Link } from "react-router-dom";

//import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import "../../styles/AllStyles.scss";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [nickName, setNickName] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("El correo y la contraseña son requeridos");
		}
		console.log(email, pass);

		// FETCH
		const data = { email: email, password: pass, nick_name: nickName };

		fetch("https://3001-aqua-ferret-6ntycunm.ws-us03.gitpod.io/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div>
			<div className="container text-center mt-5 d-flex justify-content-center align-items-center">
				<div className="row">
					<h1>Sign Up </h1>
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
					<div className="form-floating mb-3">
						<input
							type="text"
							className="form-control"
							id="floatingName"
							placeholder="Espantado"
							onChange={e => setNickName(e.target.value)}
						/>
						<label htmlFor="floatingInput">NickName</label>
					</div>
					<input type="submit" className="btn btn-primary" value="Registrarse" />
				</form>
				{redirect ? <Redirect to="/" /> : ""}
			</div>
		</div>
	);
};
