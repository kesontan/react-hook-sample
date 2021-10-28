import './App.css';

import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { useAuthContext } from './context/AuthContext';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

function App() {
  const { setIsLoggedIn, isLoggedIn } = useAuthContext();

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <button type="button" onClick={() => {
                  setIsLoggedIn?.(a => !a)

                }}>{isLoggedIn ? "Log Out" : "Log In"}</button>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/:id">
              <ProductDetail />
            </Route>
            <Route path="/">
              <Products />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
