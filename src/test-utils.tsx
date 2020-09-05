import React, { ReactElement, ComponentType } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render as libRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from './store/Reducers';
import rootSagas from './store/Sagas';
import createSagaMiddleware from 'redux-saga';

export function Render(ui: ReactElement, options?: any): any {
  const sagaMiddleware = createSagaMiddleware({});
  const store = createStore(rootReducer, options?.state, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSagas);
  // store.dispatch = jest.fn(store.dispatch);

  function Providers({ children }: any): ReactElement {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  const returns = libRender(ui, {
    wrapper: Providers as ComponentType,
    ...options
  });

  return { store, ...returns }
}
