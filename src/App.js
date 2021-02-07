import React from 'react';

import Header from './containers/Header/Header';
import Layout from './component/Layout/Layout';
// import Product from './containers/Products/Product';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Auth />
      </Layout>
    </div>
  );
}

export default App;
