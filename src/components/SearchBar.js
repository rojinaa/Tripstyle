import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'
import { history } from '../helpers/history';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: '',
			isLoading: true,
		}
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleResultSelect = this.handleResultSelect.bind(this);
	}
	componentWillMount() {
		this.resetComponent()
	}

	resetComponent = () => {
		this.setState({ isLoading: false, results: [], value: ''})
	}

	handleResultSelect = (e, { result }) => {
		history.push('/products/' + result.key);
		this.resetComponent()
	}

	fetchResults(name) {
		console.log('name', name)

		let url = 'https://localhost:5001/api/product/search/?name=' + name;
		console.log('url', url);
		fetch(url)
			.then(res => res.json())
			.then(products => {
				let source = products.map(product => ({
					key: product.productId,
					title: product.name,
					make: product.make,
					image: product.image,
					price: '\u20AC' + product.price
				}))

				this.setState({
					isLoading: false,
					results: source
				})

				console.log('this.state.results', this.state.results);

			});
	}

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value: value })

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent()
			this.fetchResults(this.state.value)
		}, 300)
	}

	render() {
		const { isLoading, value, results } = this.state

		return (
			<Grid>
				<Search
					loading={isLoading}
					onResultSelect={this.handleResultSelect}
					onSearchChange={this.handleSearchChange}
					results={results}
					value={value}
				/>
			</Grid>
		)
	}
}

export default SearchBar;
