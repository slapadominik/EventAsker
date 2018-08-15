import React, {Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "../../styles/Event.css";

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this
            .toggle
            .bind(this);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onDelete = () => {
        this
            .props
            .onDelete(this.props.questionId);
        this.toggle();
    }

    render() {
        const deleteButton = (
            <React.Fragment>
                <div className="col-md-2" align="right">
                    <button className="btn btn-danger" onClick={this.toggle}>
                        Delete Question
                        <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggle}
                            className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>
                                Confirm deletion of question
                            </ModalHeader>
                            <ModalBody>Do you really want to delete this question?</ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={this.onDelete}>
                                    Delete
                                </Button>
                                <Button color="secondary" onClick={this.toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </button>
                </div>
            </React.Fragment>
        );

        return (
            <div className="row-flex card question">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div>
                                <b>Autor</b>: {this.props.authorName}{" "}
                            </div>
                            <div>
                                <b>Email</b>: {this.props.email}
                            </div>
                            <div>
                                <b>Treść</b>: {this.props.questionContent}
                            </div>
                        </div>
                        {this.props.isAuthenticated
                            ? deleteButton
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}
