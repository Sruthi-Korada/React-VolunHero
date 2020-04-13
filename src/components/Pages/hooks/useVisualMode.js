import React from 'react';
import ListItems from "./"
import { TextArea } from 'semantic-ui-react'
import Button from 'components/Button';
import "./style.scss";

export default function Form(props){
 const [tittle, setTittle] = useState(props.tittle)
 const [list, setList] = useState(props.list)
 const reset = function() {
  setTittle('');
  list('');
}
const cancel = function() {
  reset();
  props.onCancel();
}
	return(
        <div className="formed">
<h2>Create your list </h2>

<form >
<input name='tittle'type="text" value={tittle} placeholder="tittle" onChange={(event) => setTittle(event.target.value)}></input>
<TextArea className="boxed" name='list' value={list}></TextArea>
</form>
<br></br>
<div className="placing">
<Button onclick= {onclick}confirm>save</Button>
<Button ondel= {cancel}danger>Cancel</Button>
</div>
        </div>
    )
}

