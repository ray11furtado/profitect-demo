import React from 'react';

const StatusBox = props => (
  <div>
    <div className="top">
      <h2>{props.title}</h2>
    </div>
    <div className="bottom">
      <h3>{props.desc}</h3>
    </div>
  </div>
);

export default StatusBox;
