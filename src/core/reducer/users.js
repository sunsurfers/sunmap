const fixtureUsers = [
	{
		id: 'marat',
		name: 'Марат Хасанов',
		age: 27,
		place: 'Пенанг, Малайзия',
		sex: 'male',
	},
	{
		id: 'sasha',
		name: 'Александр Шистеров',
		age: 29,
		place: 'Пхукет, Таиланд',
		sex: 'male',
	},
	{
		id: 'sayana',
		name: 'Саяна',
		age: 29,
		place: 'Самуи, Таиланд',
		sex: 'female',
	},
	{
		id: 'murad',
		name: 'Мурад Рогожников',
		age: 25,
		place: 'Пхукет, Таиланд',
		sex: 'male',
	},
]
function users(state = fixtureUsers, action) {
	return state
}

module.exports = users;