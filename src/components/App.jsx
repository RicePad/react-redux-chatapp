import React, { Component, PropTypes  } from 'react';
import Appbar from './Appbar';
import ChatInput from './ChatInput';
import GroupChat from './GroupChat'
import { Grid, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux';
import { postMessage } from '../actions';

import { bindActionCreators } from 'redux';
import * as messageActions from '../actions';


class App extends Component {
    
    render(){
        return(
            <div className="App">
                <Appbar />
                <Grid>
                    <Row className="show-grid">
                        
                        <Col xs={12} md={6}>
                                <GroupChat messageItems={this.props.messageItems} actions={this.props.actions}/>
                        </Col>
                        <Col xs={12} md={8}>
                          <ChatInput className="input-text"  messageItems={this.props.messageItems} actions={this.props.actions} userIndex={1}/>
                          <ChatInput className="input-text"   messageItems={this.props.messageItems} actions={this.props.actions} userIndex={2}/>

                        </Col>
                    </Row>
                    
                </Grid>
            </div>
            );
        
    }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(messageActions, dispatch)
})

function mapStateToProps(state){
    return {
        messageItems: state.chatOperations
        
    };
    
}

// App.propTypes = {
//   messageItems: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };



export default connect(mapStateToProps, mapDispatchToProps)(App);