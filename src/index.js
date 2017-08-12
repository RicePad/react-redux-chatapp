import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap '

ReactDom.render(
        <App />, document.querySelector(".container")
        // <div>SpotiMusic</div>, document.querySelector(".container")
);