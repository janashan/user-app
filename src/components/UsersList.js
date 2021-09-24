import React, { Component } from 'react'
import axios from 'axios'

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {

            users: []

        }

    }


    addUser = () => {
        this.props.history.push('/add-user');
    }

    componentDidMount() {
        axios.get('http://localhost:8080/v1/users').then((res) => {
            this.setState({
                users: res.data
            })
        })

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                

                    <button style={{margin: "10px"}} className="btn btn-primary" onClick={this.addUser}> Add User</button>
               
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>  First Name</th>
                                <th>  Last Name</th>
                                <th>  Email </th>
                                <th>  Mobile </th>
                                <th>  Gender </th>
                                <th>  Date of Birth </th>
                                <th>  Address </th>
                                <th> Place </th>
                                <th> Aadhar No</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.id} </td>
                                            <td> {user.firstname} </td>
                                            <td> {user.lastname}</td>
                                            <td> {user.email}</td>
                                            <td> {user.mobile}</td>
                                            <td> {user.gender}</td>
                                            <td> {user.dob}</td>
                                            <td> {user.address}</td>
                                            <td> {user.place}</td>
                                            <td> {user.aadharNo}</td>
                                            <td>
                                                <button onClick={ () => this.edituser(user.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteuser(user.id)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewuser(user.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default UsersList

