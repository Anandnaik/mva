import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = props => (
  <div className="mva-app">
    <Header />
    <main className="main-content">
      {props.children}
    </main>
    <Footer />
  </div>
);

export default App;
