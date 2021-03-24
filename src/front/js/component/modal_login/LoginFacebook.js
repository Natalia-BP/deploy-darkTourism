import React, { useState } from "react";
import "../../../styles/AllStyles.scss";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";

function LoginFacebook() {
	const [redirect, setRedirect] = useState(false);
	const responseFacebook = response => {
		sessionStorage.setItem("token", response.accessToken);
		setRedirect(true);
		console.log(response);
	};

	// useEffect(() => {
	// 	window.fbAsyncInit = function() {
	// 		FB.init({
	// 			appId: "511002516959996",
	// 			cookie: true,
	// 			xfbml: true,
	// 			version: "v10.0"
	// 		});

	// 		FB.AppEvents.logPageView();
	// 	};

	// 	(function(d, s, id) {
	// 		var js,
	// 			fjs = d.getElementsByTagName(s)[0];
	// 		if (d.getElementById(id)) {
	// 			return;
	// 		}
	// 		js = d.React.createElement(s);
	// 		js.id = id;
	// 		js.src = "https://connect.facebook.net/en_US/sdk.js";
	// 		fjs.parentNode.insertBefore(js, fjs);
	// 	})(document, "script", "facebook-jssdk");
	// });

	return (
		<div>
			<br />
			<br />
			<FacebookLogin
				className="btn rounded"
				appId="511002516959996"
				autoLoad={false}
				fields="name,email,picture"
				callback={responseFacebook}
				textButton="Iniciar Sesión con Facebook"
				icon={"fab fa-facebook"}
				//cssClass="facebook"
			/>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
}

export default LoginFacebook;
