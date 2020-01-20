import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

const initialState = {
  root: {
    'Name' : 'My Todo with Saga Redux',
  },
};

function initReducer(state = initialState, action) {

  switch (action.type) {
    default:
      return { ...state };
  }
}

function* rootSaga() {
  // initial redux run function
  yield console.log("root saga reached");
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(initReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);