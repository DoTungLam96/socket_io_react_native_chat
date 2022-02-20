/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import DrawerNavigation from './src/navigationRoute/DrawerNavigation';
import {RootReducer} from './src/redux/RootReducer';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, applyMiddleware(thunk));
const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
};
export default App;
