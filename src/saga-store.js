import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

// The initial reducers for 'createStore' use
import initReducers from './initReducers';

// App Component reducer
import appReducer from './App/reducer';

const staticReducers = {};

const initialState = {};

let store = {};

export default function configureStore(state = initialState) {
  const sagaMiddleware = createSagaMiddleware();

  store = createStore(
    initReducers,
    state,
    applyMiddleware(
      sagaMiddleware
    )
  );

  // for memorize imported reducer
  store.asyncReducers = {};

  // dynamic inject new reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    // replace new reducer from createReducer ( combineReducer action )
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // instead run reducer
  //sagaMiddleware.run(rootSaga);

  // the first inject app reducer
  store.injectReducer('app', appReducer);

  return store;
};

// make store exportable
export {
  store
}

// combine reducer
function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}
