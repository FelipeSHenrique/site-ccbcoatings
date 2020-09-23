import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import i18n from './i18n/i18n';

import GlobalStyles from './assets/styles/GlobalStyles';
import {
  Container,
  ButtonLanguage
} from './StyledApp';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';

function App() {
  const [language, setLanguage] = useState('pt');

  const toogleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  }

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

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
        <ButtonLanguage onClick={toogleLanguage}>PT/EN</ButtonLanguage>
      </Container>
    </BrowserRouter>
  );
}

export default App;


