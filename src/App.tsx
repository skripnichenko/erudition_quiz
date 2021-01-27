import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Play from './components/Play/Play';
import Seetings from './components/Seetings/Seetings.jsx';
import {GlobalStyle} from './styles/App.style';
import Rules from './components/Rules/Rules';

const App: React.FC = () => {
  return (
    <>
    <GlobalStyle />
    <HashRouter>
      <Header />
      <Route path='/' component={Home} exact />
      <Route path='/play' component={Play} exact />
      <Route path='/rules' component={Rules} exact />
      <Route path='/seetings' component={Seetings} exact />
    </HashRouter>
    </>
  );
}

export default App;
