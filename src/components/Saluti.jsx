import React, { Component } from 'react';
import './Saluti.css';

export default class Saluti extends Component {
    render() {
        return <h1 > Ciao, sono il primo componente < /h1>;
    }
}

export class Saluti2 extends React.Component {
    render() {
        return <h1 > Ciao, sono il secondo componente < /h1>;
    }
}

