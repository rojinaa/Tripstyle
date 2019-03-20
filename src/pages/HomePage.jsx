import React, { Component } from 'react';
import { Container, Image, Divider, Button, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import bike from '../images/bike-dunes.jpg';
import ProductGrid from '../components/ProductGrid';
import TopHeader from '../components/Header';

class HomePage extends Component {
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
			
			<React.Fragment>
				<TopHeader />
				<Container>
					<Grid centered>
						<Button aligned='true' basic className='getStartedBtn' color='red' size='massive' as={NavLink} to='/products' >
							<Button.Content visible>Get started!</Button.Content>
						</Button>
					</Grid>
				</Container>

				<Image centered src={bike} />
				<Divider hidden />

				<Divider horizontal>Recommended</Divider>
				<Container>
					<ProductGrid columns={5} products={this.state.products} />
				</Container>
				<Divider hidden />

			</React.Fragment>
		);
	}
}

export default HomePage;
