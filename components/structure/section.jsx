// Section structure scss
import sections from '../../styles/structure/section.module.scss';
import React from 'react';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 * ¯¯¯¯¯¯¯¯         
 * @param {string}	classProp template literals of classes for contain
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Section />
 */
const Section = ({ children, classProp = '', id }) => {
	return (
		<section className={`${sections.default} ${classProp}`} id={id}>
			{children}
		</section>
	);
};

export default Section;