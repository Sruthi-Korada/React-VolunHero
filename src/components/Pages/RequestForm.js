import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap";

class RequestForm extends React.Component {
    state = {
        errorMessage: "",
        colour: "yellow", //default post-it colour
        title: "",
        description: "",
        key: "",
        category_id: 3,
        categories: [],
        is_completed: false
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

            // http://localhost:8001/api/services/create
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
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
        console.log(this.state);
    };

    render() {
        const {categories} = this.state;
        return (
            <div>
                <h2 className="post__title">Post Your Service</h2>
                <p>{this.state.errorMessage}</p>
                <Form className="form">
                    <Row>
                        <Col>
                            <Form.Control

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
                                {/* <option>Grocery/Drugs Pickup</option>
                <option>Pet Groming</option>
                <option>Gardening</option>
                <option> Grocery Shopping</option> */}
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Extra Notes"
                                value={this.state.description}
                                onChange={(e) => this.setState({description: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Form.Control
                        as="select"
                        className="textfield"
                        onChange={(e) => this.setState({colour: e.target.value})}
                    >
                        <option value="" disabled selected>
                            Post-it Colour
                        </option>
                        <option value="pink">Pink</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </Form.Control>
                    <button
                        className="btn__post"
                        type="submit"
                        size="sm"
                        onClick={(e) => this.onSubmit(e)}
                    >
                        New Service
                    </button>
                </Form>
            </div>
        );
    }
}

export default RequestForm;

// <input
//             list="tittle"
//             className="textfield"
//             placeholder="Title (required*)"
//             value={this.state.title}
//             onChange={(e) => this.setState({ title: e.target.value })}
//           />
//           <datalist id="tittle">
//             <option value="" disabled selected>
//               Pick-your-service
//             </option>
//             <option>Grocery/Drugs Pickup</option>
//             <option>Pet Groming</option>
//             <option>Gardening</option>
//             <option> Grocery Shopping</option>
//           </datalist>
//           <input
//             type="text"
//             className="textfield"
//             placeholder="Extra Notes"
//             value={this.state.description}
//             onChange={(e) => this.setState({ description: e.target.value })}
//           />

//           <select
//             className="textfield"
//             onChange={(e) => this.setState({ colour: e.target.value })}
//           >
//             <option value="" disabled selected>
//               Post-it Colour
//             </option>
//             <option value="pink">Pink</option>
//             <option value="blue">Blue</option>
//             <option value="yellow">Yellow</option>
//             <option value="green">Green</option>
//           </select>
/* <button className="mainbtn" onClick={(e) => this.onSubmit(e)}>
          Add Post-it
        </button> */
