import React, { Component } from 'react';
import RightSideBar from './rightSidebar';
import DetailBar from './detailBar';
import ProjectDetail from './projectDetail';

class DataContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <DetailBar />
        <div className="col-md-10">
          <ProjectDetail />
        </div>
        <div className="col-md-2">
          <RightSideBar />
        </div>
      </div>

    );
  }
}

export default DataContainer;
