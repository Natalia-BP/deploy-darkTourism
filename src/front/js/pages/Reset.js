import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

const Reset = () => {
	const [password, setPassword] = useState("");
	const [repassword, setRepassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const token = useParams();
	const { store, actions } = useContext(Context);
	const handleSubmit = e => {
		e.preventDefault();
		if (password != repassword) {
			console.log("Las contraseñas deben ser iguales");
		} else {
			actions.resetPassword(password, repassword, token.token);
		}
		setRedirect(true);
	};
	return (
		<div className="bgImgForms p-5 container-fluid d-flex align-items-center">
			<div className="formBgStyle container p-4 my-5 mx-auto rounded">
				<h2 className="text-center my-4">Resetear Contraseña</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group mb-4">
						<label htmlFor="passwordChange">Nueva contraseña</label>
						<input
							type="text"
							id="passwordChange"
							className="form-control"
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="passwordConfirm">Confirmar contraseña</label>
						<input
							type="text"
							id="passwordConfirm"
							className="form-control"
							onChange={e => {
								setRepassword(e.target.value);
							}}
						/>
					</div>
					<div className="form-row justify-content-center">
						<button type="submit" className="btn rounded-pill px-3 my-3">
							Restaurar
						</button>
					</div>
				</form>
			</div>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
};

export default Reset;
