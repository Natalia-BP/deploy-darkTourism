const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			nike_name: "nike name",
			token: null,
			places: null,
			currentplace: null
			//user_id: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

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
			}
		}
	};
};

export default getState;
