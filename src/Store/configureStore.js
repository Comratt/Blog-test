import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './combineReducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

export default store;
