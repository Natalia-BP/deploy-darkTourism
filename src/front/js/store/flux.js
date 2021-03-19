const getState = ({ getStore, getActions, setStore, setRedirect }) => {
	return {
		store: {
			nick_name: "nick_name",
			token: null,
			places: null,
			redirect_logout: false,
			user_id: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: () => {
				setStore({
					nick_name: sessionStorage.getItem("nick_name"),
					token: sessionStorage.getItem("u_token"),
					user_id: sessionStorage.getItem("user_id"),
					redirect_logout: false
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
					nick_name: "nick_name",
					redirect_logout: true,
					token: null
				});
				sessionStorage.removeItem("nick_name");
				sessionStorage.removeItem("u_token");
				sessionStorage.removeItem("user_id");
			}
		}
	};
};

export default getState;
