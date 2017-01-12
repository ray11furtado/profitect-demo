import React, { Component } from 'react';
import RightSideBar from './rightSidebar';

class DataContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-10">
          Hello
        </div>
        <div className="col-md-2">
          <RightSideBar />
        </div>
      </div>

    );
  }
}

export default DataContainer;
