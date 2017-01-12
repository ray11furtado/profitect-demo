import React from 'react';

const ProjectDetail = () => (
  <div className="container-fluid">
    <div className="row icon-detail">
      <div className="col-md-1">
          <span className="glyphicon glyphicon-user text-center" aria-hidden="true" />
      </div>
      <div className="col-md-2">
        <p>Assigned To:</p>
        <h4>John Smith</h4>
      </div>
      <div className="col-md-1">
        <span className="glyphicon glyphicon-calendar text-center" aria-hidden="true" />
      </div>
      <div className="col-md-2">
        <p>Due Date:</p>
        <h4>Mar 21, 2017</h4>
      </div>
      <div className="col-md-1">
        <span className="glyphicon glyphicon-exclamation-sign text-center" aria-hidden="true" />
      </div>
      <div className="col-md-2">
        <p>Risk Factor:</p>
        <h4>High</h4>
      </div>
      <div className="col-md-1">
        <h3 className="text-center">$</h3>
      </div>
      <div className="col-md-2">
        <p>Value:</p>
        <h4>$5000</h4>
      </div>
    </div>
    <div className="row globe">
      <span className="glyphicon glyphicon-globe col-md-1" aria-hidden="true" />
      <h4 className="col-md-6">Holland & Sherry Store - Boston Row (Number 1032)</h4>
    </div>
    <div className="project-text row">
      <p className="col-md-11">Store Boston (130) was found with High Damage Registration for
        High Risk Products in the last 7 days comapred to previous
        14 days and compared to North region bench mark activity.
      </p>
      <span className="col-sm-1 glyphicon glyphicon-pencil" />
    </div>
  </div>
);

export default ProjectDetail;
