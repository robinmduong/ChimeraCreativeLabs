import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import Contact from "./components/Contact";
import HeroBanner from "./components/HeroBanner";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <TopNav />
     <HeroBanner />
     <App />
     <Contact />
     <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
