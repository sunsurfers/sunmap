const fixtureLocations = {
	'marat': {
		'created_at': "Thu Jan 08 2016 00:00:00 GMT+0200 (EET)",
		'lat': 5.52498,
		'lng': 101.23429,
	},
	'murad': {
		'created_at': "Thu Jan 22 2016 00:00:00 GMT+0200 (EET)",
		'lat': 3.285153,
		'lng': 55.456238,
	},
	'sayana': {
		'created_at': "Thu Jan 16 2016 00:00:00 GMT+0200 (EET)",
		'lat': 5.529999,
		'lng': 101.23422,
	},
	'sasha': {
		'created_at': "Thu Jan 28 2015 00:00:00 GMT+0200 (EET)",
		'lat': 20.285153,
		'lng': 80.456238,
	},
};

function locations(state = fixtureLocations, action) {
	return state
}

module.exports = locations;