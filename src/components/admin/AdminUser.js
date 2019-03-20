import React, { Component } from 'react';
import TopHeader from './AdminTopHeader';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import Footer from '../Footer';
import axios from 'axios';

class AdminUser extends Component {
  displayName = AdminUser.name
  state = {
  }

  componentDidMount(){
    let user = this.props.match.params.userid;

    axios.get('https://localhost:5001/api/user/' + user)
        .then(res=> {
            console.log(res.data)
            this.setState({
                user_id: res.data.userId,
                user_fname: res.data.firstname,
                user_lname: res.data.lastname,
                user_gender: res.data.gender,
                user_email:res.data.email,
                user_phonenumber: res.data.phonenumber,
                user_password: res.data.password

            })
        })
  }
  handleChange = (e) => {
    
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = event => {
        event.preventDefault();
    
    
        axios.put('https://localhost:5001/api/user/'+this.state.user_id, {
            firstname:   this.state.user_fname,
            lastname:  this.state.user_lname,
            email:  this.state.user_email,
            gender:   this.state.user_gender,
            phonenumber:   this.state.user_phonenumber,
            password: this.state.user_password
    
          })
          .then(response => {
            console.log(response.status);
          })
          .catch(error => {
            console.log(error);
          });
          }


  render() {
    var password_confirmed = false
    if (this.state.user_fname && this.state.user_lname && this.state.user_email && this.state.user_gender &&  (this.state.user_phonenumber != '')) {
        password_confirmed = true
    }
    return ( 
      <div>
 <TopHeader />
         <Container>
             <Grid>
                 <GridRow>

                     <GridColumn width='15' verticalAlign='center'>
                         <Divider hidden />
                         <Header size='huge' textAlign='center' color='red'> {this.state.user_fname} {this.state.user_lname}</Header>
                         <Divider hidden/>
                         <Container textAlign='center'>
                             <Header size='huge'>{this.state.user_email}</Header>
                             <Divider hidden/>
                             <Divider hidden />
                             <Button disabled={!password_confirmed} onClick={this.handleSubmit} color='green' size='massive'  fluid>Submit
                             </Button>
                         </Container>
                     </GridColumn>
                 </GridRow>
             </Grid>
         </Container>

         <Divider hidden/>
         <Divider horizontal>User information</Divider>
         <Container textAlign='center'>
             <Container> First name: "{this.state.user_fname}"       EDIT: <input type="text" id='user_fname' value={this.state.user_fname} onChange={this.handleChange} /></Container>
             <Container> Last name: "{this.state.user_lname}"     EDIT: <input type="text" id='user_lname' value={this.state.user_lname} onChange={this.handleChange} /></Container>
             <Container> Gender: "{this.state.user_gender}"      EDIT: <input type="text" id='user_gender'  value={this.state.user_gender} onChange={this.handleChange} /></Container>
             <Container> Email: "{this.state.user_email}"      EDIT: <input type="text" id='user_email'  value={this.state.user_email} onChange={this.handleChange} /></Container>
             <Container> Phonenumber: "{this.state.user_phonenumber}"     EDIT: <input type="text" id='user_phonenumber' onChange={this.handleChange}  value={this.state.user_phonenumber} /></Container>
             <Container> Password: "{this.state.user_phonenumber}"     EDIT: <input type="password" id='user_password' onChange={this.handleChange}  value={this.state.user_password} /></Container>
         </Container>
         <Divider hidden />
      </div>
    );
  }
}

export default AdminUser