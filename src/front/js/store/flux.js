const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nick_name: "nick_name",
			token: null,
			places: null,
			redirect_logout: false,
			user_id: null,
			currentplace: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: () => {
				setStore({
					nike_name: sessionStorage.getItem("nike_name"),
					token: sessionStorage.getItem("u_token"),
					user_id: sessionStorage.getItem("user_id")
				});
			},
			fetchPlaces: () => {
				fetch(process.env.BACKEND_URL + "/api/place")
					.then(response => response.json())
					.then(data => {
						setStore({ places: data });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			fetchPlacesbyId: id => {
				fetch(`${process.env.BACKEND_URL}/api/place/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ currentplace: data });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			logout: () => {
				setStore({
					redirect_logout: true,
					token: null,
					nick_name: "nick_name",
					user_id: null
				});
				sessionStorage.removeItem("u_token");
				sessionStorage.removeItem("nick_name");
				sessionStorage.removeItem("user_id");
			},

			recoverPassword: email => {
				const sendData = {
					user_email: email
				};
				fetch(process.env.BACKEND_URL + "/api/recoverpassword", {
					method: "POST",
					body: JSON.stringify(sendData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			resetPassword: (password, repassword, token) => {
				let replacedToken = token.replaceAll("$", ".");
				let sendToken = `Bearer ${replacedToken}`;

				const sendData = {
					password: password,
					repassword: repassword
				};
				fetch(process.env.BACKEND_URL + "/api/resetpassword", {
					method: "POST",
					body: JSON.stringify(sendData),
					headers: {
						"Content-Type": "application/json",
						Authorization: sendToken
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
		}
	};
};

export default getState;
