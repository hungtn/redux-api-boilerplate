import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux/rootReducer';
import logicMiddleware from '../logic/rootLogic';

// REDUX_DEVTOOLS EXTENSION in dev enviroment
const composeEnhancer = process.env.NODE_ENV === 'development' ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : // eslint-disable-line
  compose;

// Config middleware
const finalCreateStore = composeEnhancer(
  applyMiddleware(
    logicMiddleware
  )
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
};
