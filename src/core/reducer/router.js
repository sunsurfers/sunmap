function router(state, action) {
  console.log('[REDUCER ROUTER]: ', {state, action});

  state = state || {
    //screen: 'auth',
    screen: 'list',
  };

  if(action.type === 'goTo') {
    state = {
      screen: action.screen,
      params: action.params,
    }
  }

  return state;
};

module.exports = router;