const initialRouter =  {
  //screen: 'auth',
  screen: 'list',
};

function router(state = initialRouter, action) {
  if(action.type === 'goTo') {
    state = {
      screen: action.screen,
      params: action.params,
    }
  }
  return state;
};

module.exports = router;