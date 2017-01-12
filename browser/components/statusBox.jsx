import React from 'react';

const StatusBox = props => (
  <div>
    <div className="top text-center">
      <h3 clasName="align-left">{props.title}</h3>
    </div>
    <div className="bottom text-center">
      <p className="align-left">{props.desc}</p>
    </div>
  </div>
);

export default StatusBox;
