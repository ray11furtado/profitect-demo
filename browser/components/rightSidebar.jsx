import React, { Component } from 'react';
import Modal from 'react-modal';
import createFragment from 'react-addons-create-fragment';
import StatusBox from './statusBox';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class RightSideBar extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      newTitle: '',
      newDescription: '',
      statusBoxes: [],
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }
  onTitleChange(event) {
    this.setState({ newTitle: event.target.value });
  }
  onDescriptionChange(event) {
    this.setState({ newDescription: event.target.value });
  }

  onModalSubmit(event) {
    event.preventDefault();
    const newBox = createFragment({
      title: this.state.newTitle,
      desc: this.state.newDescription,
    });
    this.setState(
      { statusBoxes: this.state.statusBoxes.concat([newBox]) });
    this.setState({ modalIsOpen: false });
  }
  showStatusBoxes() {
    if (this.state.statusBoxes.length > 0) {
      return this.state.statusBoxes.map(box => (
        <StatusBox key={box[0]} title={box[0]} desc={box[1]} />
    ));
    }
    return <div>Add Some Status Boxes!</div>;
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }
  closeModal(event) {
    event.preventDefault();
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div className="text-center">
        <div>
          <button
            onClick={this.openModal} type="button"
            className="btn btn-default " aria-label="Left Align"
          >
            <span className="glyphicon glyphicon-plus " aria-hidden="true" />
          </button>
          <div>
            {this.showStatusBoxes()}
          </div>
        </div>
  <Modal
    isOpen={this.state.modalIsOpen}
    onRequestClose={this.closeModal}
    style={customStyles}
    contentLabel="Add Status Box"
  >
    <h2>Add Status Box</h2>
    <form>
      <input
        placeholder="Status Title"
        onChange={this.onTitleChange}
      />
      <input
        placeholder="Status Description"
        onChange={this.onDescriptionChange}
        className="modal-btn"
      />
      <button
        onClick={this.onModalSubmit}
        className="btn btn-primary modal-btn"
      > Submit
      </button>
      <button
        onClick={this.closeModal}
        className="btn btn-danger"
      >Cancel
      </button>
    </form>
  </Modal>
</div>
    );
  }
}

export default RightSideBar;
