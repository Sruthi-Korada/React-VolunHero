import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

class UpdateForm extends React.Component {
  state = {
    colour: this.props.colour,
    title: this.props.title,
    description: this.props.description,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.updatePostIt(
        this.state.colour,
        this.state.title,
        this.state.description
    );
  };

  render() {
    let style = { backgroundColor: this.state.colour };
    let whiteFontStyle = { color: "#fff" };

    const { show, onClose } = this.props;

    return (
        <div className="update-form">
          {/* Form */}
          <Modal
              show={show}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={onClose}
          >
            <Modal.Header style={style} closeButton>
              <Modal.Title
                  id="contained-modal-title-vcenter"
                  style={whiteFontStyle}
              >
                Update Note
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={style}>
              <p>{this.state.errorMessage}</p>
              <Form>
                <Form.Group controlId="formBasicTitle">
                  <Form.Label style={whiteFontStyle}>Update Title:</Form.Label>
                  <Form.Control
                      placeholder="Title"
                      value={this.state.title}
                      onChange={(e) => this.setState({ title: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicTitle">
                  <Form.Label style={whiteFontStyle}>
                    Update Extra Notes:
                  </Form.Label>
                  <Form.Control
                      placeholder="Description"
                      value={this.state.description}
                      onChange={(e) =>
                          this.setState({ description: e.target.value })
                      }
                  />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => this.onSubmit(e)}
                >
                  Update Post-it
                </Button>
              </Form>
            </Modal.Body>
            {/* <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </Modal.Footer> */}
          </Modal>
        </div>
    );
  }
}

export default UpdateForm;

/* <div className="form-background">
          <form className="update-form" style={style}>
            <h2>Update Note</h2>
            <label> Update Title: </label>
            <br />
            <input
              type="text"
              className="textfield"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />{" "}
            <br />
            <label> Update Extra Notes: </label>
            <br />
            <input
              type="text"
              className="textfield"
              placeholder="description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />{" "}
            <br />
            <button className="mainbtn" onClick={(e) => this.onSubmit(e)}>
              Update Post-it
            </button>
          </form>
        </div> */
