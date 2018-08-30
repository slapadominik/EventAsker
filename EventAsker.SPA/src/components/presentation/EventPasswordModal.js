import React from 'react';
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

const EventPasswordModal = (props) => {

    const wrongPasswordText = (
        <React.Fragment>
            <div className="alert alert-danger eventModal">
                <strong>Access denied!</strong>
                Entered event password is invalid.
            </div>
        </React.Fragment>
    );

    const afterOpenModal = () => {};

    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={props.closeModal}
                style={modalEnterEventPasswordToAskQuestionStyle}
                contentLabel="Event password">

                <div className="form-group">
                    <h2>{props.eventName}</h2>
                    <label htmlFor="password">Hasło do wydarzenia:</label>
                    <input
                        className="form-control"
                        type="password"
                        value={props.password}
                        onChange={props.handleChangePassword}
                        required/>
                    <button
                        onClick={props.closeModal}
                        className="btn btn-danger btn-horizontal float-right">
                        Anuluj
                    </button>
                    <button
                        onClick={props.handleEventPasswordModalSubmit}
                        className="btn btn-info btn-horizontal float-right">
                        Potwierdź
                    </button>
                    {props.isEnteredPasswordInvalid
                        ? wrongPasswordText
                        : null}
                </div>
            </Modal>
        </div>
    );
}

export default EventPasswordModal;
