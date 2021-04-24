import React, { useState } from "react";
//import { Link } from "react-router-dom";

//import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import "../../styles/AllStyles.scss";
import LoginGoogle from "../component/modal_login/LoginGoogle";
import LoginFacebook from "../component/modal_login/LoginFacebook";

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

		fetch(process.env.BACKEND_URL + "/api/register", {
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
		<div className="bgImgForms container-fluid pt-5">
			<div className="py-5">
				<div className="formBgStyle py-3 container mx-auto my-5 rounded">
					<h1 className="text-white text-center mt-5">Crea una cuenta</h1>

					<div className="container text-center mt-1 d-flex justify-content-center align-items-center">
						<LoginFacebook />
					</div>
					<br />
					<div className="mt-3 d-flex justify-content-center align-items-center">
						<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
							<div className="form-floating mb-3">
								<label htmlFor="floatingInput">
									<i className="fas fa-envelope-open" /> Correo
								</label>
								<input
									type="email"
									className="form-control"
									id="floatingInput"
									placeholder="nombre@dominio.com"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-floating mb-3">
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
							<div className="form-floating mb-3">
								<label htmlFor="floatingName">
									<i className="fas fa-user" /> Username
								</label>
								<input
									type="text"
									className="form-control"
									id="floatingName"
									placeholder="Username"
									onChange={e => setNickName(e.target.value)}
								/>
							</div>
							<div className="form-row justify-content-center">
								<button type="submit" className="btn rounded-pill px-3 my-3">
									Registrarse
								</button>
							</div>
						</form>
					</div>
					{redirect ? <Redirect to="/login" /> : ""}
				</div>
			</div>
		</div>
	);
};
