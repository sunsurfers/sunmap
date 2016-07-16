const initialMe = {
	location: null,
	authorized: false,
	token: null
};
const fixtureMe = {
	location: {
		'lat': 5.52455,
		'lng': 101.23423,
	},
	authorized: true,
	token: 'sometoken'
};

function me(state = fixtureMe, action) {
	return state
}


module.exports = me;