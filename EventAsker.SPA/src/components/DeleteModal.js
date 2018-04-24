import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BASE_URL } from "../constants";
import axios from "axios";

class DeleteModal extends React.Component {
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
      <span>
        <Button color="danger" onClick={this.toggle}> DELETE </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm deletion of the event</ModalHeader>
          <ModalBody>
            Are you sure, mordeczko?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteEvent}>DELETE</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

export default DeleteModal;