const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nick_name: "nick_name",
			token: null,
			places: null,
			redirect_logout: false,
			user_id: null,
			currentplace: null,
			favoritePlaces: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: () => {
				setStore({
					nick_name: sessionStorage.getItem("nick_name"),
					token: sessionStorage.getItem("u_token"),
					user_id: sessionStorage.getItem("user_id")
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
				fetch(`${process.env.BACKEND_URL}/api/users/${getStore().user_id}/favorites`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					});
			},

			//user GET favorites
			fetchGetFavorite: () => {
				fetch(`${process.env.BACKEND_URL}/api/users/${getStore().user_id}/favorites`)
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
			}
		}
	};
};

export default getState;
