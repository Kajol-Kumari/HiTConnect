import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.handleLogin}>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                    innerRef={(input) => this.username = input} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                    innerRef={(input) => this.password = input}  />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input}  />
                    Remember me
                </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Login</Button>
        </Form>
            </div>
        )
    }
}
