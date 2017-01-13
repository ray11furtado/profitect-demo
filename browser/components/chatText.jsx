import React from 'react';

const ChatText = (props) => (
  <div className="row">
    <span className="col-sm-1" />
    <p className="col-md-2 sender">Account Name</p>
    <p className="col-md-9 text">{props.message}</p>
  </div>
);

export default ChatText;
