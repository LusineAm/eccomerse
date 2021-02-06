import React from 'react';

import Header from './containers/Header/Header';
import Layout from './component/Layout/Layout';
import Product from './containers/Products/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Product />
      </Layout>
    </div>
  );
}

export default App;
