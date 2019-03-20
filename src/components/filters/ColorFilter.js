import React, { Component } from 'react'
import { Form, Radio, Segment } from 'semantic-ui-react'

class ColorFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: '',
			colors: [
				"Black",
				"White",
				"Purple",
				"Blue",
				"Pink",
				"Red",
				"Yellow",
				"Green"
			]
		}
	}
	handleChange(value) {
		this.setState({ color: value }, () => this.props.changeColor(this.state.color));
	}

	componentWillReceiveProps() {
		this.setState({ color: this.props.current })
	}

	render() {
		return (
			<Form>
				<Form.Field>
					<b>Select a color</b>
				</Form.Field>

				{this.state.colors.map(color => (

					<Form.Field>
						<Segment 
							inverted={color.toLowerCase() !== 'white'}
							color={color.toLowerCase() === 'white' ? '' : color.toLowerCase()}
						>
							<Radio
								label={color}
								name='color'
								value={color}
								checked={this.state.color === color}
								onChange={() => this.handleChange(color)} />
						</Segment>
					</Form.Field>
				))}

				{/* <Form.Field>
					<Segment color='white'>
						<Radio
							label='White'
							name='color'
							value='White'
							checked={this.state.color === 'White'}
							onChange={() => this.handleChange('White')} />
					</Segment>
				</Form.Field>

				<Form.Field>
					<Segment inverted color='Purple'>
						<Radio
							label='Purple'
							name='color'
							value='Purple'
							checked={this.state.color === 'Purple'}
							onChange={() => this.handleChange('Purple')} />
					</Segment>
				</Form.Field>

				<Form.Field>
					<Segment inverted color='blue'>
						<Radio
							label='Blue'
							name='color'
							value='Blue'
							checked={this.state.color === 'Blue'}
							onChange={() => this.handleChange('Blue')} />
					</Segment>
				</Form.Field>

				<Form.Field>
					<Segment inverted color='pink'>
						<Radio
							label='Pink'
							name='color'
							value='Pink'
							checked={this.state.color === 'Pink'}
							onChange={() => this.handleChange('Pink')} />
					</Segment>
				</Form.Field>

				<Form.Field>
					<Segment inverted color='red'>
						<Radio
							label='Red'
							name='color'
							value='Red'
							checked={this.state.color === 'Red'}
							onChange={() => this.handleChange('Red')} />
					</Segment>
				</Form.Field>

				<Form.Field>
					<Segment inverted color='yellow'>
						<Radio
							label='Yellow'
							name='color'
							value='Yellow'
							checked={this.state.color === 'Yellow'}
							onChange={() => this.handleChange('Yellow')} />
					</Segment>
				</Form.Field> */}
			</Form>
		)
	}
}

export default ColorFilter;
