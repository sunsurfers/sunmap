import {map} from 'lodash'


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
  //lighten,
  //darken,
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
  lineHeight: function (fontSize) {
    return fontSize * 1.6
  }
};

const theme = {
  'paragraph': {
    marginTop: 2,
    marginBottom: 3,
  }
}

const style = {
  util,
  color,
  font,
  theme,
};

//function getStyles() {
//  map(arguments, function(selector){
//
//  })
//}

// стили компонентов пока-что отдельно
module.exports = style;