import React from "react";
import PropTypes from "prop-types";

export const Map = props => {
	const sitios = {
		ubicacion: {
			ubic1:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.777542978267!2d-84.91367342129767!3d9.938585536291713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa02a31755c482d%3A0xc90fbf37429f6635!2sIsla%20San%20Lucas!5e0!3m2!1ses!2scr!4v1615926271033!5m2!1ses!2scr",
			ubic2:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.745078322801!2d-84.1373658713055!3d9.876666386971745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd1390b94947%3A0xbeacdf5a4f9e73d9!2sCerro%20San%20Miguel!5e0!3m2!1ses!2scr!4v1615925864364!5m2!1ses!2scr",
			ubic3:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.4594226536506!2d-84.01015378512079!3d10.061390392809022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e8d0385eba15%3A0xd78dd459c4a7e04d!2zVMO6bmVsIFp1cnF1w60!5e0!3m2!1ses!2scr!4v1616609553252!5m2!1ses!2scr"
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
