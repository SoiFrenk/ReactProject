import React, { Component } from 'react';
import Clienti from './components/Clienti';

export default class Fidelity extends Component{
    state = {
        clienti: [
            {nome: 'Francesco', bollini: '750', data: '17/12/20'},
            {nome: 'Ludovica', bollini: '1750', data: '19/12/20'},
            {nome: 'Alberto', bollini: '350', data: '22/02/20'},
            {nome: 'Chica Ferrara', bollini: '1200', data: '27/12/20'}
        ]
    }

    render(){
        return(
            <div>
                <Clienti nome = {this.state.clienti[0].nome} bollini = {this.state.clienti[0].bollini} data = {this.state.clienti[0].data} > </Clienti>
                <Clienti nome = {this.state.clienti[1].nome} bollini = {this.state.clienti[1].bollini} data = {this.state.clienti[1].data} > </Clienti>
                <Clienti nome = {this.state.clienti[2].nome} bollini = {this.state.clienti[2].bollini} data = {this.state.clienti[2].data} > </Clienti>
                <Clienti nome = {this.state.clienti[3].nome} bollini = {this.state.clienti[3].bollini} data = {this.state.clienti[3].data} > </Clienti>
            </div>
        )
    }
}