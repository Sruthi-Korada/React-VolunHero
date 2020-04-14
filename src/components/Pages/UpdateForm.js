import React from 'react';

class UpdateForm extends React.Component {
  
  state = {

  	colour: this.props.colour,
  	title: this.props.title,
  	content: this.props.content,

  }

    onSubmit = e => {
    e.preventDefault();
    this.props.updatePostIt(this.state.colour, this.state.title, this.state.content);
  }


render() {

  let style = { backgroundColor: this.state.colour }
  return (
  
  <div>

{/* Form */}
    <div className="form-background">    
      <form
        className="update-form" style={style}>   
        <h2>Update Note</h2> 
        <p>{this.state.errorMessage}</p>
        
        <label> Update Title: </label><br />
          <input 
            type="text"
            className="textfield"
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value})} /> <br />
        
        <label> Update Extra Notes: </label><br />
          <input 
            type="text"
            className="textfield"
            placeholder="Content"
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value})} />  <br />

           <button 
          className="mainbtn"
          onClick={e => this.onSubmit(e)}>Update Post-it</button>
        </form>
     </div>
    </div>

    );
  }
  }
export default UpdateForm;