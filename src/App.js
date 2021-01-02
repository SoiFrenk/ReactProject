import logo from './logo.svg';
import './App.css';
import Saluti, { Saluti2 } from './components/Saluti';
import Fidelity from './components/Fidelity';
import Clienti from './components/Clienti';
import React from 'react';

function App() {
    return ( <
        div className = "App" >
        Benvenuti in AlphaShop!
        <
        Saluti > < /Saluti>  <
        Saluti2 > < /Saluti2> <
        Saluti3 > < /Saluti3>  <
        Fidelity > < /Fidelity> < /
        div >
    );
}

const Saluti3 = () => < h3 > Ciao,
    sono il terzo componente < /h3>;





export default App;