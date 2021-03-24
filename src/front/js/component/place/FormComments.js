import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
import { useContext, useState } from "react";

export const FormComments = props => {
	const { store, actions } = useContext(Context);
	// use state en el valor de text area y estrellas
	//function para onSubmit de la forma

	//Logica textArea
	const [comment, setComment] = useState("");
	const [rating, setRating] = React.useState(0);
	const [hoverRating, setHoverRating] = React.useState(0);

	const handleSubmit = event => {
		event.preventDefault();
		if (store.user_id === null) {
			alert("¡Debes estar logueado para comentar!");
		} else {
			let data = {
				user_id: store.user_id,
				place_id: store.currentplace.id,
				score: rating,
				review_comments: comment
			};
			actions.fetchPostReview(data);
			setComment("");
			document.getElementById("textAreaComment").value = "";
			setHoverRating(0);
			setRating(0);
		}
	};

	//Logica de estrellas
	const onMouseEnter = index => {
		setHoverRating(index);
	};
	const onMouseLeave = () => {
		setHoverRating(0);
	};
	const onSaveRating = index => {
		setRating(index);
	};

	function StarIcon(props) {
		const { fill = "none" } = props;
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={fill}
				className="starIcon"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d={`M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z`}
				/>
			</svg>
		);
	}
	StarIcon.propTypes = {
		fill: PropTypes.string
	};

	function RatingIcon(props) {
		const { index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating } = props;

		const fill = React.useMemo(
			() => {
				if (hoverRating >= index) {
					return "yellow";
				} else if (!hoverRating && rating >= index) {
					return "yellow";
				}
				return "none";
			},
			[rating, hoverRating, index]
		);
		return (
			<div
				onMouseEnter={() => onMouseEnter(index)}
				onMouseLeave={() => onMouseLeave()}
				onClick={() => onSaveRating(index)}>
				<StarIcon fill={fill} />
			</div>
		);
	}
	RatingIcon.propTypes = {
		index: PropTypes.number,
		rating: PropTypes.number,
		hoverRating: PropTypes.number,
		onMouseEnter: PropTypes.node,
		onMouseLeave: PropTypes.node,
		onSaveRating: PropTypes.node
	};
	return (
		<>
			<form className="userRating col-md-6 p-0 my-5" onSubmit={handleSubmit}>
				<h4 className="text-center text-md-left mb-3">Ingresa tu review</h4>
				<div className="form-group mt-5">
					<div className="form-row justify-content-center justify-content-md-start">
						<p className="d-inline mr-2">¿Qué calificación le darías?</p>
						<div className="starLine">
							{[1, 2, 3, 4, 5].map(index => {
								return (
									<RatingIcon
										key={index.toString()}
										index={index}
										rating={rating}
										hoverRating={hoverRating}
										onMouseEnter={onMouseEnter}
										onMouseLeave={onMouseLeave}
										onSaveRating={onSaveRating}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="textAreaComment">¿Porqué? ¡Cuéntanos tu experiencia!</label>
					<textarea
						className="form-control mb-3"
						id="textAreaComment"
						rows="4"
						placeholder="Escribe tu comentario aquí"
						onChange={e => {
							setComment(e.target.value);
						}}
					/>
					<div className="form-row justify-content-center justify-content-md-end">
						<button className="btn rounded-pill px-3">Publicar</button>
					</div>
				</div>
			</form>
		</>
	);
};
FormComments.propTypes = {
	place_id: PropTypes.number,
	user_id: PropTypes.number
};
