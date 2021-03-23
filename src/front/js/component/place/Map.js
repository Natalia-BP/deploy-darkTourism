import React from "react";
import PropTypes from "prop-types";

export const Map = props => {
	const sitios = {
		ubicacion: {
			ubic1:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.745078322801!2d-84.1373658713055!3d9.876666386971745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd1390b94947%3A0xbeacdf5a4f9e73d9!2sCerro%20San%20Miguel!5e0!3m2!1ses!2scr!4v1615925864364!5m2!1ses!2scr",
			ubic2:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.015548781624!2d-83.88538248512181!3d9.932662692897342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0de8234d5d96d%3A0x274fa4908249891b!2sSanatorio%20Dr.%20Carlos%20Dur%C3%A1n%20Cart%C3%ADn!5e0!3m2!1ses!2scr!4v1615926097203!5m2!1ses!2scr",
			ubic3:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.777542978267!2d-84.91367342129767!3d9.938585536291713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa02a31755c482d%3A0xc90fbf37429f6635!2sIsla%20San%20Lucas!5e0!3m2!1ses!2scr!4v1615926271033!5m2!1ses!2scr"
		}
	};
	return (
		<div className="d-flex justify-content-center mapaInfoPlace">
			<iframe
				src={sitios.ubicacion["ubic" + props.placeId]}
				className="w-100 rounded-lg"
				height="400px"
				allowFullScreen=""
				loading="lazy"
			/>
		</div>
	);
};

Map.propTypes = {
	placeId: PropTypes.number
};
