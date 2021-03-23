const getState = ({ getStore, getActions, setStore, setRedirect }) => {
	return {
		store: {
			nick_name: "nick_name",
			token: null,
			places: null,
			redirect_logout: false,
			user_id: null,
			currentplace: null,
			favoritePlaces: []
		},

		actions: {
			login: () => {
				setStore({
					nick_name: sessionStorage.getItem("nick_name"),
					token: sessionStorage.getItem("u_token"),
					user_id: sessionStorage.getItem("user_id"),
					redirect_logout: false
				});
				alert("Has ingresado a tu cuenta");
			},

			logout: () => {
				console.log("logout");
				setStore({
					redirect_logout: true,
					token: null,
					nick_name: "nick_name",
					user_id: null
				});
				sessionStorage.removeItem("u_token");
				sessionStorage.removeItem("nick_name");
				sessionStorage.removeItem("user_id");
				alert("Has salido de tu cuenta");
				// sessionStorage.clear()
			},

			//User POST review
			fetchPostReview: data => {
				fetch(process.env.BACKEND_URL + "/api/score", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.then(() => {
						getActions().fetchPlacesbyId(data.place_id);
					});
			},

			//User POST favorite
			fetchPostFavorite: data => {
				let alreadyFav = false;
				let favArr = getStore().favoritePlaces;
				if (favArr) {
					if (favArr.length === 0) {
						fetch(`${process.env.BACKEND_URL}/api/user/${getStore().user_id}/favorites`, {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(data)
						})
							.then(response => response.json())
							.then(() => {
								getActions().fetchGetFavorite();
								alert("Agregado a tus favoritos");
							});
					} else {
						favArr.forEach(element => {
							if (element.place_id === data.place_id) {
								alreadyFav = true;
								alert("¡Ooops! ¡Ya está en tus favoritos!");
							}
						});
						if (!alreadyFav) {
							fetch(`${process.env.BACKEND_URL}/api/user/${getStore().user_id}/favorites`, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify(data)
							})
								.then(response => response.json())
								.then(() => {
									getActions().fetchGetFavorite();
								});
						}
					}
				}
			},

			//user GET favorites
			fetchGetFavorite: () => {
				fetch(`${process.env.BACKEND_URL}/api/user/${getStore().user_id}/favorites`)
					.then(response => response.json())
					.then(data => {
						setStore({ favoritePlaces: data });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			//Places
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
