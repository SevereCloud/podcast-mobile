import React, { FunctionComponent } from 'react'

interface IIconProps {
	mode: 'primary' | 'secondary'
}

const primaryColor = '#FFFFFF';
const secondaryColor = '#3F8AE0';

const getStroke = (mode: 'primary' | 'secondary') => {
	if (mode === 'primary') {
		return primaryColor;
	}
	return secondaryColor;
}

export const Icon24Cut: FunctionComponent<IIconProps> = ({mode}) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 4L8.12 15.88" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.47 14.48L20 20" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.12 8.12L12 12" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);

export const Icon24ChartUp: FunctionComponent<IIconProps> = ({mode}) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 20V10" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18 20V4" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6 20V16" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);

export const Icon24ChartDown: FunctionComponent<IIconProps> = ({mode}) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 20V10" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6 20V4" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18 20V16" stroke={getStroke(mode)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);
