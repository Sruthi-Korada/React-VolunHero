import React, { Component } from 'react';

import './style.scss';
import Postit from './Postit';
import UpdateForm from './UpdateForm';
import Form from './form'; 
import axios from 'axios'

class Userpage extends Component {

  state = {
    postits: [
    { title: 'grocery', description: 'mustard, tomato, fruit', colour: 'pink', key: '123hj$%656' },
    { title: 'pet the cat', description: 'scratch behind the airs and sing to him', colour: 'blue' , key: '456k$%6lMy45' },
  ],
  toggleEditScreen: false,
  postToEdit: undefined,
}

//CREATE POST
createPostit = (colour, title, description) => {

  let postits = [...this.state.postits]
  let newPost = {}

  newPost.colour = colour
  newPost.title = title
  newPost.description = description
  newPost.key = title + Math.random()
  postits.push(newPost)
  this.setState ({ postits: postits})

} 

//Need to: Refractor & combine with onDragStart
//FINDS POST AND SAVES IT READT FOR EDIT, AND TOGGLES EDIT SCREEN
findPostToEdit = (key) => {
  let newPostitsArray = []
  let postits = [...this.state.postits]
  let postToEdit = {}
  
  postits.forEach((post) => {
    if (post.key !== key) {
     newPostitsArray.push(post)
    } else {
     postToEdit = post
    }})
  this.setState ({ postits: newPostitsArray, postToEdit: postToEdit, toggleEditScreen: true })
}

//UPDATE POST
updatePostIt = (colour, title, description) => {
  let postits = [...this.state.postits]
  let postToEdit = this.state.postToEdit
  postToEdit.colour = colour
  postToEdit.title = title
  postToEdit.description = description
  postToEdit.key = title + Math.random()
  postits.push(postToEdit)
this.setState ({ postits: postits, toggleEditScreen: false})
}

// Need to: Refractor & combine with findPostToEdit
// FINDS DRAGGED POST AND SAVES IT READY FOR DELETE
onDragStart = (key) => {
  let newPostitsArray = []
  let postits = [...this.state.postits]
  let postToEdit = {}
  postits.forEach((post) => {
    if (post.key === key) {
     postToEdit = post
    }
  this.setState ({ postToEdit: postToEdit })
})}

onDragOver = (e) => {
  e.preventDefault()
}

//DELETES POST OnDrop
onDrop = () => {
  let key = this.state.postToEdit.key
  let newPostitsArray = []
  let postits = [...this.state.postits]
  postits.forEach((post) => {
    if (post.key !== key) {
     newPostitsArray.push(post)
    } else {
    }})
  this.setState ({ postits: newPostitsArray })
 
 
}
// componentDidMount() {
//   console.log('working')
// axios.post(`http://localhost:8001/api/services/create`,{
//  data
// }).then((response) => {
//   console.log(response)
  
// })
// .catch((error) =>{
//   console.log(error.message);
// })
// }

render() {
 
 let postits = (
       <div>
        {this.state.postits.map((p) => {
          return <Postit
          colour={p.colour}
          title={p.title}
          description={p.description}
          key={p.key}
          onClick={(key) => this.findPostToEdit(p.key)}
          onDragStart={(key) => this.onDragStart(p.key)}/>
        })
//reversing the array so the latest postit shows first
        .reverse()} 
      </div> 
    );


//EDIT SCREEN VIEW
let editScreen
   if (this.state.toggleEditScreen) {
    editScreen = 
        <UpdateForm 
        colour={this.state.postToEdit.colour}
        title={this.state.postToEdit.title}
        description={this.state.postToEdit.description}
        key={this.state.postToEdit.key} 
        updatePostIt={this.updatePostIt}/>
     } else {
   }

//THE RETURN BLOCK
    return (
      <div>
      <div className="banner">
      <header className="logo">
      <h1>@VolunHero</h1>
      </header>
      </div>
      <div className="Appl">
        <header className="App-header">
          
          <h1>Post your Request</h1>
          <h2>VolunHero are at your service</h2>
     
      <div className="wrapper">  
        <Form createPostit={this.createPostit}/>
         <div className="trash-can"
         onDrop={() => this.onDrop()}
         onDragOver={(e) => this.onDragOver(e)}>
         <h2 className="align"> 🗑️ </h2>
         <h4> drag & Drop</h4>
        </div>
         </div>
        </header>
         <ul>
          {postits}
        </ul>
          {editScreen}
      </div>
      </div>
    );
  }
}

export default Userpage;