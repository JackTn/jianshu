import React from 'react';
import {GlobalStyled} from './style.js'
import {GlobalIconFont} from './statics/iconfont/iconfont'
import Header from './common/header'
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <GlobalIconFont />
      <Header />
    </Provider>
  );
}

export default App;
