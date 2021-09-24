import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import axios from 'axios'
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = async ev => {
      
        ev.preventDefault();
        axios.post('http://localhost:8080/v1/login',this.state)
        .then(res => {
            this.props.history.push('/users-list');
        })   
        .catch(err =>  {
            this.props.history.push('/');
        })
       
    }

    handleChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    render() {

        const { username, password } = this.state;
        return (
            <div className='login-box'>
                <Form onSubmit={this.handleSubmit}>
                    <h1>User Login</h1>
                    <Form.Group className="mb-3" controlId="formGroupUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name='username'
                            value={username}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login
