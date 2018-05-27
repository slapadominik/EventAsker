import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BASE_URL } from "../constants";
import axios from "axios";

class DeleteQuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () =>{
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteEvent = () =>{
    return axios
      .delete(BASE_URL + "/Event/DeleteEvent", {
        params: { eventId: this.props.eventId }
      })
      .then(window.location.reload());
  }

  render() {
    return (
        <button className="btn btn-danger" onClick={this.toggle}>
          Delete
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm deletion of the event</ModalHeader>
          <ModalBody>
            Do you really want to delete this event?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteEvent}>Delete</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </button>
    );
  }
}

export default DeleteQuestionModal;