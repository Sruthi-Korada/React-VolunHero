import React from "react"
import "./style.scss"
import "./form.js"

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            // tittle: this.theTittle.value,
            //     note: this.theNote.value
        }
    }
    render(){
        return (
            <div className="sticky">
                {this.state.items.map((val)=>
                    <h2>{val.tittle}</h2>-
                    <p>
                        {val.note}
                    </p>
                )}
            </div>
        );
    }
}
export default List;


