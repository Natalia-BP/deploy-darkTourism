import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const PasswordRecover = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		actions.recoverPassword(email);
		alert("Hemos enviado un link a su email");
	};
	return (
		<div className="bgImgForms container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
			<div className="formBgStyle container my-5 rounded p-4">
				<div className="box">
					<h2>Recuperar contraseña</h2>
					<form onSubmit={handleSubmit}>
						<div className="inputBox">
							<input
								type="text"
								name=""
								required=""
								onChange={e => {
									setEmail(e.target.value);
								}}
							/>
							<label>Email</label>
						</div>

						<div className="form-row justify-content-center">
							<button className="btn rounded-pill px-3" type="submit">
								Recuperar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PasswordRecover;
