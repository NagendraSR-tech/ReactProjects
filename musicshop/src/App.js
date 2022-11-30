import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import Products from './components/Products';

function App() {
  return (
    <div>
      <h1>Music Store</h1>
      <hr></hr>
      <Header/>
      <hr></hr>
      <Products/>
      <ProductListing/>
    </div>
  );
}

export default App;
