import React from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import Reducers from './reducers';

const createNewStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const Store = createStore(Reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return Store;
};

export default ({ element }) => (
  <Provider store={createNewStore()}>{element}</Provider>
);
