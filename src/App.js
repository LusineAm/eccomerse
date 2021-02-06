import './App.css';
import Header from './containers/Header/Header';
import Layout from './component/Layout/Layout';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <main className="app-main-content">
          <span>products</span>
        </main>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
