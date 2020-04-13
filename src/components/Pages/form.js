import React from "react"
import { TextArea } from 'semantic-ui-react'
import List from './List';
import Button from "../Button";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workingTitle: '',
            items: [],
        }
        this.addNotes = this.addNotes.bind(this);
    }

    addNotes(e) {
        console.log('working')
        if (this.theTittle.value !== "") {
            var newItem = {
                tittle: this.theTittle.value,
                note: this.theNote.value
            }
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });
            this.theNote.value = "";
            this.theTittle.value = "";
        }
        e.preventDefault();
    }

    render() {
        console.log("this.state:", JSON.stringify(this.state))
        return (
            <div className="formed">
                <header>
                    <h2>Hello What do you want me to do?</h2>
                </header>
                <form onSubmit={this.addNotes}>
                    <input type="text" placeholder="tittle" ref={(tittle) => this.theTittle = tittle} />

                    {/* <input type="text" placeholder="tittle" value={this.state.workingTitle} onChange={(data) => { console.log('input onchange data', data); this.setState({ workingTitle: data }); }} /> */}

                    <textarea className="boxed" placeholder="enter your list" ref={(note) => this.theNote = note} />
                    <br></br>
                    <div className="placing">
                        <Button type="submit" onClick={this.addNotes} confirm>save</Button>
                        <Button danger>Cancel</Button>
                    </div>
                </form>
                {/* <List>

                </List> */}
                <div className="sticky">
                    {/* {this.state.items.map((val) => (val.note))} */}

                    {this.state.items.map((val) => (
                        <span>
                            <h2>{val.tittle}</h2> -
                            <li>{val.note}</li>
                        </span>
                    ))}
                </div>
            </div>
        )
    }
}
export default Form;