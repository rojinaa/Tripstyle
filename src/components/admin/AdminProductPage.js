import React, { Component } from 'react';
import TopHeader from './AdminTopHeader';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import Footer from '../Footer';
import axios from 'axios';

class AdminProductPage extends Component {
  displayName = AdminProductPage.name
  state = {
  }
  componentDidMount(){
    let product = this.props.match.params.productid;
    console.log(this.props.match.params.productid)
    axios.get('https://localhost:5001/api/product/' + product)
        .then(res=> {
            console.log(res.data[0])
            this.setState({
                product_ProductId: res.data.productId,
                product_name: res.data.name,
                product_price: res.data.price,
                product_image: res.data.image,
                product_size: res.data.size,
                product_make: res.data.make,
                product_color: res.data.color,
                product_region: res.data.region,
                product_season: res.data.season,
                product_stock: res.data.stock,
                product_category: res.data.categoryId
            })
        })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    //console.log(this.state.product_name[0])
  }
  handleSubmit = event => {
    event.preventDefault();


    axios.put('https://localhost:5001/api/product/'+this.state.product_ProductId, {
        name:   this.state.product_name,
        price:  this.state.product_price,
        image: this.state.product_image,
        size:   this.state.product_size,
        make:   this.state.product_make,
        color:  this.state.product_color,
        region: this.state.product_region,
        season: this.state.product_season,
        stock: this.state.product_stock,
        categoryid: this.state.product_category
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
    console.log(this.state)
    if (this.state.product_name && this.state.product_price && this.state.product_image && this.state.product_size && this.state.product_make && this.state.product_color && this.state.product_region && this.state.product_season &&( this.state.product_category != '')) {
        password_confirmed = true
    }
    return ( 
      <div>
        <TopHeader />
        <Container>
            <Grid>
                <GridRow>
                    <GridColumn computer='3'>
                        <Container>
                        </Container>
                    </GridColumn>
                    <GridColumn computer='8'>
                        <Divider hidden />
                        <Container textAlign='center'>
                            <Image id="largeImage" src={this.state.product_image} size='big' />
                        </Container>
                    </GridColumn>
                    <GridColumn width='5' verticalAlign='center'>
                        <Divider hidden />
                        <Header size='huge' textAlign='right' color='red'> €{this.state.product_price},- </Header>
                        <Divider hidden/>
                        <Container textAlign='center'>
                            <Header size='huge'>{this.state.product_name}</Header>
                            <Divider hidden/>
                            Size:
                            <Container fluid>
                                <Header size='huge'> {this.state.product_size} </Header>
                            </Container>
                            <Divider hidden />
                            <Button disabled={!password_confirmed} onClick={this.handleSubmit} color='green' size='massive'  fluid>Submit
                            </Button>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
        <Divider hidden/>
        <Divider horizontal>Product information</Divider>
        <Container textAlign='center'>
            <Container> Name: "{this.state.product_name}"       EDIT: <input type="text" id='product_name' value={this.state.product_name} onChange={this.handleChange} /></Container>
            <Container> Price: "{this.state.product_price}"     EDIT: <input type="text" id='product_price' value={this.state.product_price} onChange={this.handleChange} /></Container>
            <Container>Fabric: "{this.state.product_make}"      EDIT: <input type="text" id='product_make' value={this.state.product_make}  onChange={this.handleChange} /></Container>
            <Container> Color: "{this.state.product_color}"     EDIT: <input type="text" id='product_color' value={this.state.product_color}  onChange={this.handleChange} /></Container>
            <Container> Region: "{this.state.product_region}"   EDIT: <input type="text" id='product_region' value={this.state.product_region}  onChange={this.handleChange} /></Container>
            <Container>Season: "{this.state.product_season}"    EDIT: <input type="text" id='product_season' value={this.state.product_season}  onChange={this.handleChange} /></Container>
            <Container> CategoryId: "{this.state.product_category}" EDIT: <input type="text" id='product_category' value={this.state.product_category} onChange={this.handleChange} /></Container>
            <Container> Image: "{this.state.product_image}" EDIT: <input type="text" id='product_image'  value={this.state.product_image} onChange={this.handleChange} /></Container>
        </Container>
        <Divider hidden />
        <Footer />
      </div>
    );
  }
}

export default AdminProductPage