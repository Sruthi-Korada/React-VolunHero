
import React from 'react';

class Form extends React.Component {
  
  state = {

  	errorMessage: '',
  	colour: 'yellow', //default post-it colour
  	title: '',
  	content: '',
    key: '',
  }


 onSubmit = e => {
    e.preventDefault();
    if (this.state.title === null) {
       this.setState ({ errorMessage: 'Title is required'})
    } else {
       this.props.createPostit(this.state.colour, this.state.title, this.state.content);
       this.setState ({ colour: 'yellow', title: '', content: '', key: '', errorMessage: '' })
    }
    console.log(this.state)
  }


  render() {

  return (
  <div>

{/* Form */}
        <form className="form">   
        <h2>Add Post-it Note</h2> 
        <p>{this.state.errorMessage}</p>

        <input 
        list="tittle"
        className="textfield"
        placeholder="Title (required*)"
        value={this.state.title}
        onChange={e => this.setState({ title: e.target.value})} />
        <datalist id="tittle">
        <option value="" disabled selected>Pick-your-service</option>
        <option >Grocery/Drugs Pickup</option>
        <option >Pet Groming</option>
        <option >Gardening</option>
        <option > Grocery Shopping</option>
              </datalist>
          <input 
            type="text"
            className="textfield"
            placeholder="Extra Notes"
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value})} />

{/* Select Animal Dropdown */}
            <select
            className="textfield"
            onChange={e => this.setState({ colour: e.target.value})}>
            <option value="" disabled selected>Post-it Colour</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            </select>

           <button 
          className="mainbtn"
          onClick={e => this.onSubmit(e)}>Add Post-it</button>
          
        </form>
    </div>

    );
  }
  }

export default Form;