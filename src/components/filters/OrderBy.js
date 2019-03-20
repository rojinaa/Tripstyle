import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class OrderBy extends Component {
	constructor(props) {
		super(props)
		this.state = {
			orderBy: '',
			orderOptions: [
				{ key: 1, text: 'A-Z', value: 'az' },
				{ key: 2, text: 'Z-A', value: 'za' },
				{ key: 3, text: '€-€€€', value: 'ce' },
				{ key: 4, text: '€€€-€', value: 'ec' }
			]
		}
	}

	handleChange(value) {
		console.log('value', value)
		this.setState({ orderBy: value }, () => this.props.changeOrderBy(this.state.orderBy))
	}

	componentWillReceiveProps() {
		this.setState({ orderBy: this.props.current })
	}

	render() {
		// console.log('selected from state', this.state.orderOptions[0].value)
		return (
			<Dropdown 
				clearable 
				selection 
				value={this.state.orderBy !== '' ? this.state.orderBy : 'az'}
				options={this.state.orderOptions}
				onChange={(e, {value}) => this.handleChange(value)}
			>
			</Dropdown>
		)
	}
}

export default OrderBy;