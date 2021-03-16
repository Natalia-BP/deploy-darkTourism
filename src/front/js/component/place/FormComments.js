import React from "react";
import PropTypes from "prop-types";

export const FormComments = () => {
	//<i class="fas fa-star"></i>
	return (
		<>
			<form className="userRating col-md-6 p-0 my-4">
				<h4 className="text-center text-md-left mb-3">Ingresa tu review</h4>
				<div className="star form-group my-5">
					<p className="d-inline mr-2">¿Qué calificación le darías?</p>
					<i className="far fa-star d-inline" />
				</div>
				<div className="form-group">
					<label htmlFor="textAreaComment">¿Porqué? ¡Cuéntanos tu experiencia!</label>
					<textarea
						className="form-control mb-3"
						id="textAreaComment"
						rows="3"
						placeholder="Escribe tu comentario aquí"
					/>
					<div className="form-row justify-content-center justify-content-md-end">
						<button type="submit" className="btn rounded-pill">
							Publicar
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
