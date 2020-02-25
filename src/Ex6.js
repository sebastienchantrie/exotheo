/* 
Ex07 - Subject

Liste, tableaux et propriétés
Sujet

Créer un composant `List`, qui prend en propriété `data` une tableau d'object.
Afficher les informations de chaque élément de la liste dans un table (table, etc).
Le tableau affichera toutes les données de chaque éléments reçu. Le nom de la colonne est le nom de la propriété.
*/



import React, { Component } from 'react';
import List3 from './List3.js'

class Ex6 extends React.Component {
    render() {
        const data = [
            {id: 0, count: 42, alive: 13},
            {id: 1, count: 420, alive: 7},
            {id: 2, count: 8, alive: 4},
            {id: 3, count: 12, alive: 15},
            {id: 4, count: 1.5, alive: 12},
        ];
        return(
            <div>
            <h1>Ex6</h1>
            <table>
            <List3 array={data}/>
            </table>
            </div>
        )
    }
}

export default Ex6;