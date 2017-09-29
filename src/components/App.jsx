import React, { Component } from 'react';
import Appbar from './Appbar';
import ChatInput from './ChatInput';
import GroupChat from './GroupChat'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
    
    render(){
        return(
            <div className="App">
                <Appbar />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                          <ChatInput />
                        </Col>
                        <Col xs={12} md={8}>
                            <GroupChat />
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
            );
        
    }
}

export default App;