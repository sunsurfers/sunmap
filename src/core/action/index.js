import {assign, toArray, reduce, pick} from 'lodash';

const ACTIONS = {
	router: require('./router'),
}

export default assign({}, ACTIONS, {
	pick: function(){
		return reduce(pick(ACTIONS, toArray(arguments)), assign, {});
	}
});
