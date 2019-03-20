import React, { Component } from 'react';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button } from 'semantic-ui-react';
import * as cookie from '../helpers/cookie.js'
import { connect } from 'react-redux';
import { userActions } from '../redux/actions'
import TopHeader from '../components/Header';

class ProductDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: '',
			isLoading: true,
			isFavorite: false
		}

		let user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			this.props.dispatch(userActions.remember(user));
		}
	}

	componentDidMount() {
		this.fetchProduct()
		this.checkFavorite()
	}

	componentDidUpdate() {
		if (this.props.match.params.id !== this.state.selectedId) {
			this.fetchProduct()
		}
	}

	componentWillReceiveProps() {
		this.fetchProduct()
	}

	checkFavorite() {
		if (this.props.user === undefined) {
			return
		}
		let url = 'https://localhost:5001/api/favorite/check?productId=' + this.props.match.params.id + '&userId=' + this.props.user.userId
		console.log(url)
		fetch(url)
			.then(res => {
				if (res.ok) {
					this.setState({ isFavorite: true })
				}
			})

	}

	fetchProduct() {
		this.setState({ selectedId: this.props.match.params.id })
		let url = 'https://localhost:5001/api/product/' + this.props.match.params.id
		console.log('url', url)
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoading: false,
					product: json,
					productId: json.productId
				})
			})
	}

	handleAddToCart() {
		let c = cookie.get('cart') || "[]";
		let cart = JSON.parse(c)
		cart.push(this.state.product.productId)
		cookie.set('cart', JSON.stringify(cart))
	}

	handleFavorite(productId) {
		this.setState({
			isFavorite: true
		})
		fetch('https://localhost:5001/api/favorite', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				productId: productId,
				userId: this.props.user.userId
			})

		})
        window.location.reload();
	}

	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		}
		var OutOfStock = false
		if (this.state.product.stock) {
			OutOfStock = true
		}
		
		return (
			<React.Fragment>
				<TopHeader/>
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
									<Image id="largeImage" src={this.state.product.image} size='big' />
								</Container>
							</GridColumn>
							<GridColumn width='5' verticalAlign="middle">
								<Divider hidden />
								<Header size='huge' textAlign='right' color='red'> €{this.state.product.price},- </Header>
								<Divider hidden />
								<Container textAlign='center'>
									<Header size='huge'>{this.state.product.name}</Header>
									<Divider hidden />
									Size:
                            <Container fluid>
										<Header size='huge'> {this.state.product.size} </Header>
									</Container>
									<Divider hidden />

									<Button onClick={this.handleAddToCart.bind(this)} color='green' size='massive' icon='shopping cart' fluid disabled={!OutOfStock} />
									<Header hidden={OutOfStock}>
										Out of Stock
									</Header>
									{this.props.user ?
										<Button onClick={() => this.handleFavorite(this.state.product.productId)} disabled={this.state.isFavorite} icon='heart' size='big' color='red' />
									:
										null	
									}
								</Container>
							</GridColumn>
						</GridRow>
					</Grid>
				</Container>
				<Divider hidden />

				<Divider horizontal>Product information</Divider>
				<Container textAlign='center'>
					<Container>Name: {this.state.product.name}</Container>
					<Container>Fabric: {this.state.product.make}</Container>
					<Container>Color: {this.state.product.color}</Container>
					<Container>Region: {this.state.product.region}</Container>
					<Container>Season: {this.state.product.season}</Container>
					<Container>Category: {this.state.product.category.name}</Container>
				</Container>

			</React.Fragment>
		);
	}
}


const mapStateToProps = state => {
	return {
		user: state.authentication.user
	}
}

export default connect(mapStateToProps)(ProductDetailPage);
