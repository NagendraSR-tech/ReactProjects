import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" >LOGO</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/productlist" className="nav-link" >Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/productlist' element={<ProductList />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
