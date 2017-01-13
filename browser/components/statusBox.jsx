import React from 'react';

const StatusBox = props => (
  <div className="single-box">
    <div className="top text-center">
      <h4 clasName="align-left">{props.title}</h4>
    </div>
    <div className="bottom text-center">
      <p className="align-left">{props.desc}</p>
    </div>
  </div>
);

export default StatusBox;
