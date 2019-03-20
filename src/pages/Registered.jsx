import React, { Component } from 'react';
import { Button, Container, Grid, Form, Divider, Header } from 'semantic-ui-react'
import { history } from '../helpers';
import {Link} from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

class Registered extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}
	}

	componentDidMount() {
		fetch('https://localhost:5001/api/product/getfive')
			.then(res => res.json())
			.then(json => {
				this.setState({
					products: json
				})
			});
	}
    
        render() {
            return (
                <div>
                    <Divider hidden />
                        <Container textAlign='center'>
                            <Header size='huge'> Thank you for signing up for TripStyle! </Header>
                        </Container>
                        <Divider hidden />
                        <Container textAlign='center'>
                            You can now login using your submitted email address and password. Just press the blue 'Login' button in the top-right corner to login or by clicking <Link to='login'>here</Link>. 
                            If you want to return to the homepage press the following link: <Link to='/'>Go to homepage</Link>.
                        </Container>
                        <Divider hidden />
                        <Container textAlign='center'>
                            If you want to start browsing our webshop then you can do that <Link to='products'> here</Link>.
                        </Container>
                        <Divider hidden />
                        <Container textAlign='center'>
                            Haven't got a clue where to start? Let us help you with some recommended products!
                        </Container>
                        <Divider hidden />
                        <Divider hidden />
                        <Container>
					        <ProductGrid columns={5} products={this.state.products} />
				        </Container>
                        <Divider hidden />
                        <Divider hidden />
                        <Divider hidden />
                        <Divider hidden />
                </div>
            );
        }
    }
    

export default Registered;