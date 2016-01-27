module.exports = function(state, action){
  //action.changeRoute

  state = state || {
    router: {
      screen: 'auth'
    }
  };
  console.log('[REDUCER]: ', {state, action});
  return state;
};