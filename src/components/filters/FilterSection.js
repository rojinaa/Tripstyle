import React, { Component } from 'react'
import { Form, Divider, Button } from 'semantic-ui-react'

import RegionFilter from './RegionFilter';
import CategoryFilter from './CategoryFilter'
import ColorFilter from './ColorFilter';
import OrderBy from './OrderBy'

class FilterSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: '',
            products: '',
            orderBy: '',
            category: '',
            color: ''
        }
    }

    changeColor(color) {
        this.setState({ color }, () => this.props.receiveFilter(this.state))
    }

    changeCategory(category) {
        this.setState({ category }, () => this.props.receiveFilter(this.state))
    }

    changeRegion(region) {
        this.setState({ region }, () => this.props.receiveFilter(this.state))
    }
    changeOrderBy(orderBy) {
        console.log('huts')
        this.setState({ orderBy }, () => this.props.receiveFilter(this.state))
    }

    resetFilter() {
        this.setState({
            region: '',
            category: '',
            color: '',
            orderBy: 'az'
        }, () => this.props.receiveFilter(this.state))
        

    }

    render() {
        return (

            <Form>
                <OrderBy current={this.state.orderBy} changeOrderBy={(orderBy) => this.changeOrderBy(orderBy)} />
                <Divider hidden />

                <ColorFilter current={this.state.color} changeColor={(color) => this.changeColor(color)} />
                <Divider hidden />

                <RegionFilter current={this.state.region} changeRegion={(region) => this.changeRegion(region)} />
                <Divider section hidden />

                <CategoryFilter current={this.state.category} changeCategory={(category) => this.changeCategory(category)} />
                <Divider section hidden />

                <Button basic color='teal' onClick={() => this.resetFilter()} >
                    <Button.Content visible>Reset filter</Button.Content>
                </Button>
                <Divider section hidden />
            </Form>

        )
    }
}

export default FilterSection;