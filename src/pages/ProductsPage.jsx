import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import ProductGrid from '../components/ProductGrid'
import FilterSection from '../components/filters/FilterSection'
import TopHeader from '../components/Header';

class ProductsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			name: '',
			region: '',
			color: '',
			category: '',
			orderBy: 'az',
		}
	}
	
	receiveFilter(allFilters) {
		console.log('allFilters', allFilters)
		this.setState({
			region: allFilters.region,
			category: allFilters.category,
			color: allFilters.color,
			orderBy: allFilters.orderBy
		}, () => this.componentDidMount())
	}

	componentDidMount() {
		let url = 'https://localhost:5001/api/product/filter?name=' + this.state.name + 
		'&region=' + this.state.region + 
		'&category=' + this.state.category +
		'&color=' + this.state.color +
		'&orderBy=' + this.state.orderBy
		console.log('url', url)
		fetch(url)
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
			<TopHeader/>
			<Container>
				<Grid>
					<Grid.Column width={3}>
						{/* Filter selection */}
						<FilterSection receiveFilter={(allFilters) => this.receiveFilter(allFilters)} />
					</Grid.Column>

					<Grid.Column width={13}>
						{/* Filtered product grid */}
						<ProductGrid columns={4} products={this.state.products} />
					</Grid.Column>

				</Grid>
			</Container>
			</div>
		)
	}

}

export default ProductsPage;
