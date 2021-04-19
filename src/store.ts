import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';

import { createBrowserHistory } from 'history';

const basename = '/development';
const history = createBrowserHistory({
  basename,
});


export type RootState = {
  router: RouterState;
};

const store = createStore(
  combineReducers({
    router: connectRouter(history),
  }),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)),
);

export { history };
export default store;
