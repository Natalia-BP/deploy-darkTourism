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
		<div className="bg-pass vh-100">
			<div className="contpassword">
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
						<input type="submit" name="" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default PasswordRecover;
