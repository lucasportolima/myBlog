'use strict'

import React, { Component } from 'react';

// export default createReactClass({
//     getDefaultProps(){
//         return {
//             name: 'teste'
//         }
//     },
//     render(){
//         return (
//             <h1>{ this.props.name }</h1>
//         )
//     }
// });

class Title extends Component{
    render(){
        return(
            <h1>{ this.props.name }</h1>
        );
    }
}

export default Title