const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nick_name: "nick_name",
			token: null,
			places: null,
			redirect_logout: false,
			user_id: null,
			scores: [{}]
		},
		actions: {
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			//User Login-Logout
			login: () => {
				setStore({
					nike_name: sessionStorage.getItem("nike_name"),
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
			fetchPostReview: () => {
				fetch(process.env.BACKEND_URL + "/api/score", {
					method: "POST"
				})
					.then(response => response.json())
					.then(data => {
						setStore({ scores: data });
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
