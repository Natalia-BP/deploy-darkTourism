import React, { useEffect } from "react";
import "../../../styles/AllStyles.scss";
import FacebookLogin from "react-facebook-login";

function LoginFacebook() {
	const responseFacebook = response => {
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
