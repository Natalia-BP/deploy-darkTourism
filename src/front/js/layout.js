import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/Home";
import { InfoPlace } from "./pages/InfoPlace";
import { SignUp } from "./pages/SignUp";
import injectContext from "./store/appContext";
import PasswordRecover from "./pages/PasswordRecover";
import Reset from "./pages/Reset";

import { Navbar } from "./component/componentes_fijos/Navbar";
import { Footer } from "./component/componentes_fijos/Footer";
import { ModalLogin } from "./component/modal_login/ModalLogin";

//import ModalLogin from "./src/front/js/component/modal_login/ModalLogin.js"
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="containerAll d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/infoplace/:id">
							<InfoPlace />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/login">
							<ModalLogin />
						</Route>
						<Route exact path="/passwordrecover">
							<PasswordRecover />
						</Route>
						<Route exact path="/reset/:token">
							<Reset />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
