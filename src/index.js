import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Home from './modules/home/Home';
import About from './modules/about/About';
import Products from './modules/products/Products.jsx';
import Contact from './modules/contact/Contact';

const App = () => {
    return(
        <div>
            <Home />
            <About />
            <Products />
            <Contact />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));