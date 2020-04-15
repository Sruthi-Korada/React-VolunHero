import React, {Component} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
export default class volunteerpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            services: []
        }
    }

    componentDidMount() {
        let self = this;
        console.log('reloaded')
        axios.get('http://localhost:8001/api/services/',
        // axios.get('http://localhost:8001/api/users/'    
        ).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response.data)
            return response.data.services;
        }).then(function(data) {
            self.setState({services: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }
    

    render() {
        return (
        <div className="container"> 
            <div className="panel panel-default p50 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>user_id</th>
                            <th>services</th>
                            <th>category_id</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.services.map(member =>
                        <tr key={member.id}>
                        <td>{member.user_id} </td>
                        <td>{member.description}</td>
                        <td>{member.category_id}</td>
                        <td><a>Accept</a>|<a>Complete</a></td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
                </div>
                    
        )
            }
           
    }

        