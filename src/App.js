import React from 'react';
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Skills from "./container/Skills/Skills";
import Footer from "./container/Footer/Footer";
import Work from "./container/Work/Work";
import Navbar from "./components/Navbar/Navbar";

import './App.scss'

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Footer/>
        </div>
    );
};

export default App;