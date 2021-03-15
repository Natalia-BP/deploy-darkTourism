import React from "react";
import "../../../styles/AllStyles.scss";
import GoogleLogin from "react-google-login";

function LoginGoogle() {
	const responseGoogle = response => {
		console.log(response);
		console.log(response.profileObj);
	};

	return (
		<div className="LoginGoogle">
			<br />
			<br />
			<GoogleLogin
				clientId="730752462806-pqbtmurj3amqqda1riqevj2vpa17uvsh.apps.googleusercontent.com"
				buttonText="Iniciar Sesión con Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={"single_host_origin"}
			/>
		</div>
	);
}

export default LoginGoogle;
