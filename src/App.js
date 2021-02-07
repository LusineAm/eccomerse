import React from 'react';

import Header from './containers/Header/Header';
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Auth />
        <Products />
      </Layout>
    </div>
  );
};

export default App;
