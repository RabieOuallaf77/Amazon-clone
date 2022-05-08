import './App.css';
import Header from './Main__components/Header';
import Home from './Main__components/Home';
import Login from './Main__components/Login';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import React from 'react';
import Checkout from './Main__components/Checkout';



function App() {
  return (
    <div className="App">
      <Router>
       <Routes>

         {/* route for the main page */}

       <Route
      path='/'
      element={(
        <>
          <Header />
          <Home />
        </>
      )}
    />
        {/* route fot the checkout page */ }

      <Route 
        path='/checkout'
        element={(
          <>
            <Header />
            <Checkout />
            
          </>
        )}
      />

        {/* route for the login page */}
      <Route 
          path='/login'
          element={(
            <>
              <Login />
            </>
          )}
        />
       </Routes>

        
      </Router>


    </div>
  );
}

export default App;
