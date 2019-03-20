import React, { Component } from 'react';
import { Button, Container, Grid, Form, Divider } from 'semantic-ui-react'
import { history } from '../helpers';
import TopHeader from '../components/Header';

class RegistrationPage extends Component {
    constructor (props) {
      super(props);
      this.state = {
        RoleId: 1,
        Birthdate: '',
        Token: '',
        Firstname: '',
        Gender: '',
        Lastname: '',
        Email: '',
        Phonenumber: '',
        Password: '',
        Confirm_password: '',
        PostalCode: '',
        Street: '',
        City: '',
        Country: ''
      }
    }
    
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // this.props.createProduct(this.state)
        fetch('https://localhost:5001/api/user/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            RoleId: this.state.RoleId,
            Gender: this.state.Gender,
            Birthdate: '',
            Token: '',
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Email: this.state.Email,
            Phonenumber: this.state.Phonenumber,
            Password: this.state.Password,
            Street: this.state.Street,
            PostalCode: this.state.PostalCode,
            City: this.state.City,
            Country: this.state.Country
          })
        })
        history.push('/registered')
    }
        render() {
            const {Firstname, Lastname, Gender, Email, Phonenumber, Password, Confirm_password, Street, PostalCode, City, Country} = this.state

            var password_confirmed = false
            if (Password && Firstname && Gender && Lastname && Email && Street && PostalCode && City && Country && (Password === Confirm_password)) {
                password_confirmed = true
            }

            return (
                <div>
                    <TopHeader/>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Container>
                                <h1>Create your account</h1>
                                <Form onSubmit={this.handleSubmit}>
                                    <Container>
                                        <Form.Input label='First name' placeholder='First name' name='Firstname' value={Firstname} onChange= {this.handleChange} required />
                                        <Form.Input label='Last name' placeholder='Last name' name='Lastname' value={Lastname} onChange= {this.handleChange} required />
                                        <Form.Input label='Gender' placeholder='Gender' name='Gender' value={Gender} onChange= {this.handleChange} />
                                        <Form.Input label='Email address' placeholder='Email address' name='Email' value={Email} onChange= {this.handleChange} required />
                                        <Form.Input label='Phone number' placeholder='Phone number' name='Phonenumber' value={Phonenumber} onChange= {this.handleChange} />
                                        <Form.Group unstackable widths={2}>
                                            <Form.Input label='Password' placeholder='Password' name='Password' type='password' value={Password} onChange= {this.handleChange} required/>
                                            <Form.Input label='Confirm password' placeholder='Confirm Password' type='password' name='Confirm_password' value={Confirm_password} onChange= {this.handleChange} required/>
                                        </Form.Group>
                                        <Form.Input label='Address' placeholder='Address' name='Street' value={Street} onChange= {this.handleChange} required/>
                                        <Form.Group unstackable widths={2}>
                                            <Form.Input label='Postal code' placeholder='Postal code' name='PostalCode' value={PostalCode} onChange= {this.handleChange} />
                                            <Form.Input label='City' placeholder='City' name='City' value={City} onChange= {this.handleChange} required />
                                        </Form.Group>
                                        <Form.Input label='Country' placeholder='Country' name='Country' value={Country} onChange= {this.handleChange} required />
                                        <Form.Checkbox label='I agree to the Terms and Conditions' required />
                                        {/* <Form.Checkbox label='I agree to take part in the "human centipide project"' /> */}
                                    </Container>
                                    <Divider hidden fitted />
                                    <Form.Button type='submit' disabled={!password_confirmed}>Submit</Form.Button>
                                </Form>
                            </Container>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden />
                </div>
            );
        }
    }
    

export default RegistrationPage;
