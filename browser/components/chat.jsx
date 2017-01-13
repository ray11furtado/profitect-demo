import React from 'react';

const Chat = () => (
  <div className="text-input row">
    <input className="text-input col-md-10" />
    <span className="text-center col-md-1 glyphicon glyphicon-paperclip" />
    <button className="btn btn-primary">Send</button>
  </div>
);

export default Chat;
