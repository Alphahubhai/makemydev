// Utility packages
import Spacing from '../utils/spacing.util';
import React from 'react';

// Structure scss
import css from '../../styles/structure/container.module.scss';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 *          ¯¯¯¯¯¯¯¯¯¯¯
 * @param {string}	classProp template literals of classes for container
 * @param {array} 	spacing array of strings for Spacing utility
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Container />
 */
const Container = ({ children, className = '' }) => {
	return (
		<div className={`${css.container} ${className}`}>
			{children}
		</div>
	);
};

export default Container;