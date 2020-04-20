import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap";
import {ToastsContainer, ToastsStore,ToastsContainerPosition } from 'react-toasts';

class RequestForm extends React.Component {
    state = {
        errorMessage: "",
        colour: "yellow", //default post-it colour
        title: "",
        description: "",
        key: "",
        category_id: 4,
        categories: [],
        is_completed: false,
        toastVisible: false
    };

    componentDidMount() {
        Promise.all([fetch("http://localhost:8001/api/categories")])
            .then(([res1]) => {
                return Promise.all([res1.json()]);
            })
            .then(([res1]) => {
                this.setState({categories: res1.categories});
            })
            .catch((err) => {
                console.log("caught it!", err);
            });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === null) {
            this.setState({errorMessage: "Title is required"});
        } else {
            this.setState({
                colour: "yellow",
                title: "",
                description: "",
                key: "",
                errorMessage: "",
            });
            const data = {
                user_id: 3,
                category_id: this.state.category_id,
                description: this.state.description,

            };

            fetch("http://localhost:8001/api/services/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    
                    this.props.createPostit(
                        this.state.category_id,
                        this.state.description,
                    );
                    ToastsStore.success(<h4>You have made a request!</h4>)
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
        console.log(this.state);
    };
    fechServices() {
        Promise.all([
            fetch(`http://localhost:8001/api/services/delete`),
        ])
            .then(([res1]) => {
                return Promise.all([res1.json()]);
            })
            .then(([res1]) => {
                this.setState({ postits: res1.services });
            })
            .catch((err) => {
                console.log("caught it!", err);
            });
    }
    render() {
        const {categories} = this.state;
        
        return (
            <div>
                <h2 className="post__title">Submit your Request</h2>
                <p>{this.state.errorMessage}</p>
                <Form className="form">
                    <Row>
                        <Col>
                            <Form.Control
                                className="request__title"
                                as="select"
                               placeholder="Title (required*)"
                                value={this.state.title}
                                onChange={(e) => {

                                    this.setState({title: e.target.value, category_id: e.target.selectedIndex})
                                }}
                            >
                                <option value="" disabled selected>
                                    Pick-your-service
                                </option>
                                {categories &&
                                categories.map((c) => (
                                    <option id={c.id} key={c.id}>{c.category}</option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control
                                className="extra__note"
                                placeholder="Description"
                                value={this.state.description}
                                onChange={(e) => this.setState({description: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <div className="btn__newservice">
                    <button
                        className="btn__post"
                        type="submit"
                        size="sm"
                        onClick={(e) => {
                        
                            this.onSubmit(e);
                           
                        }}>
                        New Service
                    </button>
                    </div>
                </Form>
                <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore}/>
            </div>
        );
    }
}

export default RequestForm;
