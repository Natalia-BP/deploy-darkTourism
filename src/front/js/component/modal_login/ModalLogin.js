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
			<div id="cont-img-login">
				<div id="cont-formLogin">
					<div className="text-center mt-1 d-flex justify-content-center align-items-center">
						<h1>Ingresa a tu cuenta</h1>
					</div>
					<div className="container text-center mt-1 d-flex justify-content-center align-items-center">
						<LoginGoogle />
						<LoginFacebook />
					</div>
					<br />
					<h6 id="or">o utiliza tu correo</h6>
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
							</div>
							<input type="submit" className="btn btn-primary mt-3 mb-3" value="Login" />
							<p className="forgot-password text-right">
								<Link to={"/passwordrecover"}>Forgot password?</Link>
							</p>
						</form>
						{redirect ? <Redirect to="/" /> : ""}
					</div>
				</div>
			</div>
		</>
	);
};
