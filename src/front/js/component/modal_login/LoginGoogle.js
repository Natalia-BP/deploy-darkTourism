import React, { useState } from "react";
import "../../../styles/AllStyles.scss";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";

function LoginGoogle() {
	const [redirect, setRedirect] = useState(false);
	const responseGoogle = response => {
		sessionStorage.setItem("token", response.accessToken);
		setRedirect(true);
		console.log(response);
		console.log(response.profileObj);
	};

	// return (
	// 	<div className="LoginGoogle">
	// 		<br />
	// 		<br />
	// 		<GoogleLogin
	// 			clientId="730752462806-pqbtmurj3amqqda1riqevj2vpa17uvsh.apps.googleusercontent.com"
	// 			buttonText="Iniciar Sesión con Google"
	// 			onSuccess={responseGoogle}
	// 			onFailure={responseGoogle}
	// 			cookiePolicy={"single_host_origin"}
	// 		/>
	// 		{redirect ? <Redirect to="/" /> : ""}
	// 	</div>
	// );
	return null;
}

export default LoginGoogle;
