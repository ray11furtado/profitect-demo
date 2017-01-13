import React from 'react';

const ChatNav = () => (
  <div className="chat-nav contianer-fluid">
    <div className="col-md-10 text-center">
      <div className="col-md-3">CAUGHT ITEMS (4) <span className="badge">3</span></div>
      <div className="col-md-3">BEST PRACTICES (3) <span className="badge">5</span></div>
      <div className="col-md-3">TASKS(2)</div>
      <div className="col-md-3">HISTORY(5)</div>
    </div>
    <div className="col-md-2 text-center">
      <div className="glyphicon glyphicon-chevron-down" />
    </div>
  </div>
)

export default ChatNav;
