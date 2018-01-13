import React from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

const App = (props) => (
  <div className="mva-app">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default App;
