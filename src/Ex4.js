/* Créer un composant `List', qui prend en propriété `data` une tableau de nombre.
Afficher les informations de chaque élément de la liste dans un table (table, etc).

Le tableau recu prendra la forme suivante:
const data = [13, 420, 42, 7, 4, 8, 3, 17, 30, -1, 0]; */

import React, { Component } from 'react';
import List from './List.js'

class Ex4 extends React.Component {
    render() {
        const data = [13, 420, 42, 7, 4, 8, 3, 17, 30, -1, 0];
        return(
            <div>
            <h1>Ex4</h1>
            <table>
                <List array={data}/>
            </table>
            </div>
        )
    }
}

export default Ex4;

