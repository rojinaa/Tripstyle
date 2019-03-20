import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Divider, Button, Container, Header, Segment, Image, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import * as cookie from '../helpers/cookie.js'

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			products: []
		}
	}

	handleHideClick = () => this.setState({ visible: false });
	handleSidebarHide = () => this.setState({ visible: false });
	handleShowClick = () => {
		this.setState({ visible: true, products: this.state.products })
		this.fetchCart()
	};

	fetchCart() {
		let products = JSON.parse(cookie.get('cart'))
		let items = this.mapCart(products);

		let cart = []

		items.ids.map((id, index) => {
			fetch('https://localhost:5001/api/product/' + id)
				.then(res => res.json())
				.then(json => {
					json.quantity = items.sums[index]
					cart.push(json)
					cart.sort((a, b) => (a.name > b.name) ? 1 : -1)
					this.setState({
						products: cart
					}) 
				})
		})
	}

	mapCart(arr) {
		// Count occurances
		let prev;

		let result = {
			ids: [],
			sums: []
		}
		arr.sort();
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== prev) {
				result.ids.push(arr[i]);
				result.sums.push(1);
			} else {
				result.sums[result.sums.length - 1]++;
			}
			prev = arr[i];
		}
		return result;
	}

	cartIncr(index) {
		this.state.products[index].quantity = this.state.products[index].quantity + 1
		this.forceUpdate()
		let cart = JSON.parse(cookie.get('cart'))
		cart.push(this.state.products[index].productId)
		cookie.set('cart', JSON.stringify(cart))

	}

	cartDecr(index) {
		this.state.products[index].quantity = this.state.products[index].quantity - 1
		this.forceUpdate()
		let cart = JSON.parse(cookie.get('cart'))

		for (var i = 0; i < cart.length - 1; i++) {
			if (cart[i] === this.state.products[index].productId) {
				cart.splice(i, 1);
			}
		}
		cookie.set('cart', JSON.stringify(cart))
	}

	cartDelete(index) {
		let products = this.state.products;
		let productIds = []
		let itemToDelete = products[index].productId

		products.map(product => {
			productIds.push(product.productId)
		})

		let filteredProducts = []
		productIds.map(function (productId, index) {
			if (productId !== itemToDelete) {
				filteredProducts.push(products[index])
			}
		})

		this.setState({
			products: filteredProducts
		})

		let cart = JSON.parse(cookie.get('cart'))
		const valueToRemove = this.state.products[index].productId
		const filteredItems = cart.filter(function (cart) {
			return cart !== valueToRemove
		})
		cookie.set('cart', JSON.stringify(filteredItems))
	}

	render() {
		const { visible, products } = this.state
		return (
			<React.Fragment>
				<Sidebar
					as={Menu}
					animation='push'
					onHide={this.handleSidebarHide}
					vertical
					inverted
					color='grey'
					visible={visible}
					direction='right'
					width='wide'>

					<Segment inverted color='grey' textAlign='center'>
						<NavLink to='/order'>

							<Button fluid color='green' size='huge'>
								<Icon name='in cart' size='large' />
								Order
              				</Button>
						</NavLink>
					</Segment>

					<Divider />
					<Container textAlign='center'>
						{products.map((product, index) => (
							<Segment inverted color='grey'>
								<Header as='h3' floated='left'>{product.name}</Header>
								<Header as='h2' floated='right'> €{product.price * product.quantity},-</Header>
								<Header>
									<Button.Group>
										<Button onClick={() => this.cartDelete(index)}>X</Button>
										<Button negative onClick={() => this.cartDecr(index)} disabled={product.quantity <= 1}>-</Button>
										<Button.Or text={product.quantity} />
										<Button positive onClick={() => this.cartIncr(index)}>+</Button>
									</Button.Group>
								</Header>
								<Menu.Item>
									<Grid.Column>
										<Image as={Container} src={product.image} size='medium' />
									</Grid.Column>
								</Menu.Item>
								<Divider />
							</Segment>
						))}

					</Container>
					<Divider />
				</Sidebar>

				<Button circular size='huge' icon='shopping cart' color='red' onClick={this.handleShowClick}>
				</Button>


			</React.Fragment>
		)
	}
}

export default ShoppingCart;
