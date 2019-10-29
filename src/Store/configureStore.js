import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import reducers from './combineReducers';

// Custom middlewares
import { dispatchString } from './Middleware';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, dispatchString, loadingBarMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'FAILURE'],
    })),
    // eslint-disable-next-line
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

export default store;
