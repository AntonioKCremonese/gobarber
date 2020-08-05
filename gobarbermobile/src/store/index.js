import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistReducers';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware({});

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store,persistor};