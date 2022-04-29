import './App.css';
import Header from './Main__components/Header';
import Home from './Main__components/Home';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import React from 'react';
import Checkout from './Main__components/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
       <Routes>

         {/* route for the main page */}

       <Route
      path='/'
      element={(
        <>
          <Home />
        </>
      )}
    />
        {/* route fot the checkout page */ }

      <Route 
        path='/checkout'
        element={(
          <>

            <Checkout />
            
          </>
        )}
      />
       </Routes>

      </Router>


    </div>
  );
}

export default App;
