/* global getElementById */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

// class App {
     
//     render(){
//         return <div>This is a class being render with react</div>
        
//     }
      
// }

// ReactDom.render(<App />, document.querySelector(".container"));


// ReactDom.render(
//     <div>I'm using directly react here</div>, document.querySelector('#root')
//  );

ReactDom.render(
        <App />, document.getElementById("root")
    );




