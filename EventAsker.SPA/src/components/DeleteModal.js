import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class DeleteModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
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
            <Button color="danger" onClick={() => this.props.onDelete(this.props.eventId)}>Delete</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </button>
    );
  }
}

export default DeleteModal;