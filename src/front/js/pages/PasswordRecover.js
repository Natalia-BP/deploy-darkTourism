import React from "react";
import PropTypes from "prop-types";

const PasswordRecover = () => {
	return (
		<div className="bg-pass">
			<div className="box">
				<h2>Recuperar contraseña</h2>
				<form>
					<div className="inputBox">
						<input type="text" name="" required="" />
						<label>Email</label>
					</div>
					<div className="inputBox">
						<input type="text" name="" required="" />
						<label>Password</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PasswordRecover;
