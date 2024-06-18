import React, { Component } from 'react';

class MinhaLista extends Component {
    
    state = {  
        itens:['item1', 'item2', 'item3', 'item4']
    };
    
    render() { 
        return ( 
            <React.Fragment>            
            <ul>
                {this.state.itens.map(item=><li key={item}>{item}</li>)}
            </ul>
            </React.Fragment>
        );
    }
}
 
export default MinhaLista;