import React, {Component} from "react";
import {Collapse, CardBody, Card} from "reactstrap";
import "../../styles/Index.css";
import "../../styles/Event.css";
import axios from "axios";
import {BASE_URL, BASE_STATIC_FILES} from "../../constants";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Question from "./Question";
import {lecture} from "../../actions/lecturesAction";
import {bindActionCreators} from "redux";
import DeleteModal from "./DeleteModal";
import EventPasswordModal from "./EventPasswordModal";
import Modal from "react-modal";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventQuestions: props.eventQuestions,
            collapse: false,
            questionCollapse: false,
            modalIsOpen: false,
            password: "",
            isEnteredPasswordInvalid: false
        };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    handleEventPasswordModalSubmit = e => {
        axios
            .put(BASE_URL + "/event/checkeventpassword", {
            EventId: this.props.eventId,
            AudienceKey: this.state.password
        })
            .then(response => {
                if (response.status === 200) {
                    this.onClickAddQuestion()
                    return;
                }
            })
            .catch(() => {
                this.setState({isEnteredPasswordInvalid: true});
            });
    };

    
    handleChangePassword = e => {
        this.setState({password: e.target.value});
    };
   
    mapQuestionsToListItems = () => {
        return this
            .state
            .eventQuestions
            .map(question => (<Question
                key={question.questionId}
                questionId={question.questionId}
                authorName={question.authorName}
                email={question.email}
                questionContent={question.questionContent}
                isAuthenticated={this.props.auth}
                onDelete={this.deleteQuestion}/>));
    };

    filterQuestions = id => {
        return this
            .state
            .eventQuestions
            .filter(q => q.questionId !== id);
    };

    deleteQuestion = id => {
        return axios
            .delete(BASE_URL + "/Question/DeleteQuestion/" + id)
            .then(response => {
                this.setState({
                    eventQuestions: this.filterQuestions(id)
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    toggle = () => {
        this.setState({
            collapse: !this.state.collapse
        });
    };

    toggleQuestions = () => {
        this.setState({
            questionCollapse: !this.state.questionCollapse
        });
    };

    onClickAddQuestion = e => {
        const location = "/addQuestion/" + this.props.eventId;
        this
            .context
            .router
            .history
            .push(location);
    };

    onClickAddLecture = e => {
        const location = "/addLectures/" + this.props.eventId;
        this
            .context
            .router
            .history
            .push(location);
    };

    onClickEditEvent = e => {
        const location = "/editEvent/" + this.props.eventId;
        this
            .context
            .router
            .history
            .push(location);
    };

    openModal = () => {
        console.log(this.props)
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false, password: "", isEnteredPasswordInvalid: false});
    };

    render() {
        const {isAuthenticated} = this.props.auth;
        const adminButtons = (
            <React.Fragment>
                <button className="btn btn-warning" onClick={this.toggleQuestions}>
                    Questions
                </button>
                <button className="btn btn-warning" onClick={this.onClickAddLecture}>
                    Add lectures
                </button>
                <button className="btn btn-warning" onClick={this.onClickEditEvent}>
                    Edit Event
                </button>
                <DeleteModal
                    eventId={this.props.eventId}
                    isOpen={this.state.modal}
                    onDelete={this.props.onDelete}/>
            </React.Fragment>
        );

        const imageLocation = BASE_STATIC_FILES + this.props.imageFilename;

        return (
            <div>
                <div className="container card-event">
                    <div className="row bg-faded">
                        <div className="col-md-5">
                            <div
                                className="card card-block h-100 justify-content-center align-items-center card-transparent">
                                <div className="card-img-top img-fluid">
                                    <img src={imageLocation} alt="Event"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card card-block h-100 justify-content-center">
                                <div className="event-info">
                                    <h3>{this.props.eventName}</h3>
                                    <h6>{this.props.eventCity}</h6>
                                    <h6>{this.props.eventDate}</h6>
                                    <h6>{this.props.eventTime}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div
                                className="card card-block h-100 justify-content-center align-items-center card-buttons">
                                <div className="btn-group-vertical" align="right" role="group">
                                    <button className="btn btn-primary" onClick={this.toggle}>
                                        {" "}
                                        Description
                                    </button>
                                    <button className="btn btn-success" onClick={this.openModal}>
                                        Ask Question
                                    </button>
                                    <EventPasswordModal isEnteredPasswordInvalid={this.state.isEnteredPasswordInvalid}  handleChangePassword={this.handleChangePassword} eventName={this.props.eventName} closeModal={this.closeModal} modalIsOpen={this.state.modalIsOpen} handleEventPasswordModalSubmit={this.handleEventPasswordModalSubmit} />
                                    {isAuthenticated
                                        ? adminButtons
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <div className="desc">
                                <h6>Description:
                                </h6>
                                <p>{this.props.eventDescription}</p>
                            </div>
                            <h6>Street:
                            </h6>
                            <p>{this.props.eventStreet}</p>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse isOpen={this.state.questionCollapse}>
                    <Card>
                        <CardBody>
                            <h6>Questions:
                            </h6>
                            <div className="containter">{this.mapQuestionsToListItems()}</div>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

Event.propTypes = {
    auth: PropTypes.object.isRequired
};

Event.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {auth: state.auth};
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    lecture
}, dispatch))(Event);
