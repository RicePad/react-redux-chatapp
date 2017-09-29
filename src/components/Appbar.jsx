import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Appbar extends Component {
    
    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar .Header>
                        <Navbar .Brand>
                            Redux Chat App
                        </Navbar .Brand>
                        <Navbar .Toggle/>
                    </Navbar .Header>
                    <Navbar .Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Group Chat</NavItem>
                    </Nav>
                    </Navbar .Collapse>
                </Navbar>
            </div>
            );
        
    }
}

export default Appbar;