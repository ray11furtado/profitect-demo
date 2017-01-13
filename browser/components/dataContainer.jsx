import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RightSideBar from './rightSidebar';
import DetailBar from './detailBar';
import ProjectDetail from './projectDetail';
import ChatContainer from './chatContainer';

class DataContainer extends Component {

  componentWillMount() {
    /* Here is where we call our action that makes a call to the DB and loads the data
     onto the application state.
     We would pass in the current company name to the actions
     We would then pass that data into the ProjectDetail component as props
     OR
     We can call our actions in side the ProjectDetail and load up the data directly from there
    */
  }
  render() {
    return (
      <div className="container-fluid">
        <DetailBar />
        <div className="col-md-10">
          <div className="container">
            <ProjectDetail className="col-lg-6" />
            <ChatContainer className="col-lg-6" />
          </div>
        </div>
        <div className="col-md-2">
          <RightSideBar />
        </div>
      </div>

    );
  }
}

export default connect(null, actions)(DataContainer);
