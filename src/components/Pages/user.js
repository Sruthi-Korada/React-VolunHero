import React, { Component } from "react";
import {Navbar, Row, Col, Nav} from "react-bootstrap";

import "./style.scss";
import Postit from "./Postit";
import UpdateForm from "./UpdateForm";
import RequestForm from "./RequestForm";
import Axios from "axios";
import Logo from './volun--hero.png'

class Userpage extends Component {
    state = {
        postits: [],
        toggleEditScreen: false,
        postToEdit: undefined,
    };

    componentDidMount() {
        this.fechServices();  
    }

    fechServices() {
        Promise.all([
             fetch(`http://localhost:8001/api/services/3`),
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
    onDelete = (cardId) => {
        const data = JSON.stringify({id: cardId})
        fetch('http://localhost:8001/api/services/delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',       // receive json
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(res => res.json())
            .then(data => this.fechServices())
    };
    //CREATE POST
    createPostit = (description, category_id, is_completed) => {
        let postits = [...this.state.postits];
        let newPost = {};

        //newPost.colour = colour;
        newPost.category_id = category_id;
        newPost.description = description;
        newPost.is_completed = is_completed;
        newPost.key = 1 + Math.random();
        postits.push(newPost);

        this.fechServices();

        // this.setState({ postits: postits });
    };

    //Need to: Refractor & combine with onDragStart
    //FINDS POST AND SAVES IT READT FOR EDIT, AND TOGGLES EDIT SCREEN
    findPostToEdit = (key) => {
        let newPostitsArray = [];
        let postits = [...this.state.postits];
        let postToEdit = {};

        postits.forEach((post) => {
            if (post.key !== key) {
                newPostitsArray.push(post);
            } else {
                postToEdit = post;
                // newPostitsArray.push(post);
            }
        
        });

        this.setState({
            postits: newPostitsArray,
            postToEdit: postToEdit,
            toggleEditScreen: true,
        });
    };

    //UPDATE POST
    updatePostIt = (colour, title, description) => {

        let postits = [...this.state.postits];
        let postToEdit = this.state.postToEdit;
        postToEdit.colour = colour;
        postToEdit.title = title;
        postToEdit.description = description;
        postToEdit.key = title + Math.random();
        postits.push(postToEdit);
        // TODO: make a post call

        //http://localhost:8001/api/services/create
        Axios.post(`http://localhost:8001/api/services/create`, postToEdit)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.message);
            });

        this.setState({ postits: postits, toggleEditScreen: false });
    };

    // TOGGLE SHOW EDIT MODAL
    toggleEditScreen = () => {
        this.setState({ toggleEditScreen: false });
    };

    // Need to: Refractor & combine with findPostToEdit
    // FINDS DRAGGED POST AND SAVES IT READY FOR DELETE
    onDragStart = (key) => {
        let postits = [...this.state.postits];
        let postToEdit = {};
        postits.forEach((post) => {
            if (post.key === key) {
                postToEdit = post;
            }
            this.setState({ postToEdit: postToEdit });
        });
    };

    onDragOver = (e) => {
        e.preventDefault();
    };

    //DELETES POST OnDrop
    onDrop = () => {
        let key = this.state.postToEdit.key;
        let newPostitsArray = [];
        let postits = [...this.state.postits];
        postits.forEach((post) => {
            if (post.key !== key) {
                newPostitsArray.push(post);
            } else {
            }
        });
        this.setState({ postits: newPostitsArray });
    };

    render() {
        console.log('posits', this.state.postits);
        let postits = (
            <React.Fragment>
                {this.state.postits && this.state.postits
                    .map((p) => {
                        if (p.user_id === 3)
                            return (
                                <Postit
                                    cardId={ p.id}
                                    onDelete = {this.onDelete}
                                    category_id={p.category_id}
                                    description={p.description}
                                    volunteer_user_id = {p.volunteer_user_id}
                                    key={p.key}
                                    is_completed={p.is_completed}
                                    onClick={(key) => this.findPostToEdit(p.key)}
                                    onDragStart={(key) => this.onDragStart(p.key)}
                                />
                            );

                        return undefined;
                    })
                    //reversing the array so the latest postit shows first
                    .reverse()}
            </React.Fragment>
        );

        //EDIT SCREEN VIEW
        let editScreen;
        if (this.state.toggleEditScreen) {
            editScreen = (
                <UpdateForm
                    colour={this.state.postToEdit.colour}
                    title={this.state.postToEdit.title}
                    description={this.state.postToEdit.description}
                    key={this.state.postToEdit.key}
                    show={this.state.toggleEditScreen}
                    updatePostIt={this.updatePostIt}
                    onClose={this.toggleEditScreen}
                />
            );
        }

        //THE RETURN BLOCK
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark" className="app__bar">
                    <img className="app__logo" src={Logo}/>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <button className="delete">Emergency Contact: +1 508 445 9343</button>
                        <button className="delete">SignOff</button>
                    </Nav>
                </Navbar>
                <div className="hero__banner">
                    <div className="form__container">
                        <div className="flex__form">
                                <div className="interest__form">
                                    <RequestForm createPostit={this.createPostit} />
                                </div>
                        </div>
                    </div>
                </div>
                <div className="quote__banner">
                    <div className="info__container">
                        <div className="info__wrapper">
                            <div className="quote__left">
                                <h3 className="banner__heading">Helping Hands Are Better Than Praying Hands</h3>
                                <span className="banner__span">
                                    You Have 2 hands. One to help yourself, One to help others
                                </span>
                            </div>
                            <div className="quote__right">
                                <a href="#" className="help__cta">HELP US</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts__container">
                    {postits}
                </div>
            </React.Fragment>
        );
    }
}

export default Userpage;