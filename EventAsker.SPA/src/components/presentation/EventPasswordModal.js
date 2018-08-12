import React, {Component} from 'react';
import Modal from "react-modal";
import "../../styles/EventModal.css";

const modalEnterEventPasswordToAskQuestionStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "500px"
    }
};

class EventPasswordModal extends Component {
    constructor(props) {
        super(props);
    }


    afterOpenModal = () => {};

    showDescription = () => {};

    render() {

        const wrongPasswordText = (
            <React.Fragment>
                <div className="alert alert-danger eventModal">
                    <strong>Access denied!</strong> Entered event password is invalid.
                </div>
            </React.Fragment>
        );

        return (
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    style={modalEnterEventPasswordToAskQuestionStyle}
                    contentLabel="Event password">

                    <div className="form-group">
                    <h2>{this.props.eventName}</h2>
                        <label htmlFor="password">Event password:</label>
                        <input
                            className="form-control"
                            type="password"
                            value={this.props.password}
                            onChange={this.props.handleChangePassword}
                            required/>
                        <button
                            onClick={this.props.closeModal}
                            className="btn btn-danger btn-horizontal float-right">
                            Cancel
                        </button>
                        <button
                            onClick={
                            this.props.handleEventPasswordModalSubmit
                        }
                            className="btn btn-info btn-horizontal float-right">
                            Confirm
                        </button>
                        {this.props.isEnteredPasswordInvalid
                            ? wrongPasswordText
                            : null}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default EventPasswordModal;
