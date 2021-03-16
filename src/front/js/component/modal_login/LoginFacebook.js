import React from "react";
import "../../../styles/AllStyles.scss";
import FacebookLogin from "react-facebook-login";

function LoginFacebook() {
	const responseFacebook = response => {
		console.log(response);
	};

	return (
		<div className="LoginFacebook">
			<br />
			<br />
			<FacebookLogin
				appId="511002516959996"
				autoLoad={false}
				fields="name,email,picture"
				callback={responseFacebook}
				textButton="Iniciar Sesión con Facebook"
				icon={"fab fa-facebook"}
				cssClass="facebook"
			/>
		</div>
	);
}

export default LoginFacebook;
