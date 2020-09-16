import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './assets/styles/GlobalStyles';
import { Container } from './StyledApp';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';

function App() {


  return (
    <BrowserRouter>
      <Container>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={About} />
          <Route path="/produtos" component={Products} />
          <Route path="/sustentabilidade" component={Sustainability} />
          <Route path="/contato" component={Contact} />
        </Switch>

        <GlobalStyles />
      </Container>
    </BrowserRouter>
  );
}

export default App;


