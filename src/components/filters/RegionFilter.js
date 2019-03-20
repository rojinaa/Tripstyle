import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class RegionFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: '',
      regions: [
        "Africa",
        "Asia",
        "Europe",
        "North-America",
        "South-America",
        "Oceania"
      ]
    }
  }

  handleChange(value) {
    this.setState({ region: value }, () => this.props.changeRegion(this.state.region));
  }

  componentWillReceiveProps() {
    this.setState({ region: this.props.current })
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <b>Select a region</b>
        </Form.Field>

        {this.state.regions.map(region => (
          <Form.Field>
            <Radio
              label={region}
              name='region'
              value={region}
              checked={this.state.region === region}
              onChange={() => this.handleChange(region)}
            />
          </Form.Field>
        ))}
      </Form>
    )
  }

}

export default RegionFilter;
