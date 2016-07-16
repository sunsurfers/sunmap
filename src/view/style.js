import {map, reduce, assign} from 'lodash'


// @credits: честно украл откуда-то
function hex2rgba(hex, opacity) {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$$/i
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	})
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$$/i.exec(hex);
	const colors = [
		parseInt(result[1], 16),
		parseInt(result[2], 16),
		parseInt(result[3], 16),
		opacity || 1
	];
	return result ? 'rgba(' + colors.join(', ') + ')' : null
}


const util = {
	hex2rgba,
	lighten(col, amt) {
		var usePound = false;

		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}

		var num = parseInt(col, 16);

		var r = (num >> 16) + amt;

		if (r > 255) r = 255;
		else if (r < 0) r = 0;

		var b = ((num >> 8) & 0x00FF) + amt;

		if (b > 255) b = 255;
		else if (b < 0) b = 0;

		var g = (num & 0x0000FF) + amt;

		if (g > 255) g = 255;
		else if (g < 0) g = 0;

		return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
	},
	darken() {
		util.lighten(col, amt * -1)
	}
};


/* tnx http://tintui.com/ for color tables */
const color = {
	red: '#FF3B30',
	cherry: '#FF2D55',
	blue: '#007AFF',
	aqua: '#34AADC',
	sky: '#5AC8FA',
	green: '#4CD964',
	orange: '#FF9500',
	yellow: '#FFCC00',
	beige: '#D6CEC3',
	indigo: '#5856D6',
	gray: '#8E8E93',
	lightgray: '#C7C7CC',
};

const font = {
	family: {
		//base,
		//sansSerif,
		//serif,
		//cursive
	},
	size: {
		//base,
		//large,
		//small,
	},
	lineHeight: function (fontSize, lh) {
		return fontSize * (lh || 1.6)
	}
};

const THEME = {
	'paragraph': {
		marginTop: 2,
		marginBottom: 3,
	},
	'label': {
		backgroundColor: util.lighten(color.blue, 60),
		paddingTop: 2,
		paddingBottom: 2,
		paddingLeft: 5,
		paddingRight: 5,
		borderRadius: (12 + 2 + 2) / 2,
	},
	'label-text': {
		color: 'white',
		fontSize: 12,
	},
	'text-gray': {
		color: color.gray,
	}
};


// todo: catch and console.warn cases when styles by id isn't found
function $$(classNames, componentStyles = {}) {
	if (classNames.indexOf(' ') === -1) {
		return componentStyles[classNames] || THEME[classNames];
	}

	return assign.apply(null,
			map(
					classNames.split(/\s+/g),
					(className) => componentStyles[className] || THEME[className]
			)
	);
};

function create(componentStyles) {
	return (classNames) => {
		// todo: memoize for production faster
		return $$(classNames, componentStyles)
	}
};


export {
		util,
		color,
		font,

		THEME,
		create,
		$$
		}