import React, { Component } from 'react';
import RightSideBar from './rightSidebar';
import DetailBar from './detailBar';
import ProjectDetail from './projectDetail';
import ChatContainer from './chatContainer';

class DataContainer extends Component {
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

export default DataContainer;
