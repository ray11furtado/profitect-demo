import React from 'react';
import ChatText from './chatText';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMessage: '',
      messages: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }
  onMessageChange(event) {
    this.setState({ currentMessage: event.target.value });
  }
  sendMessage(event) {
    event.preventDefault();
    this.setState({ messages: this.state.messages.concat([this.state.currentMessage]) });
  }
  showMessages() {
    return this.state.messages.map(message => <ChatText message={message} />,
    );
  }

  render() {
    return (
      <div className="chat-body">
        <div className="text-input row">
          <input
            className="text-input col-md-10"
            onChange={this.onMessageChange}
          />
          <span className="text-center col-md-1 glyphicon glyphicon-paperclip" />
          <button
            className="btn btn-primary"
            onClick={this.sendMessage}
          >Send
          </button>
        </div>
        <div className="chat-text">
          <ChatText message="Send a message and add some status boxes on the right!!" />
          <div>
            {this.showMessages()}
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
