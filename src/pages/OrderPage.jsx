import React, { Component } from 'react';
import OrderUserDetails from './OrderUserDetails';
import OrderPersonalDetails from './OrderPersonalDetails';
import OrderConfirmation from './OrderConfirmation';
import OrderSuccess from './OrderSuccess';
import TopHeader from '../components/Header'

class OrderPage extends Component {
    displayName = OrderPage.name

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userId: '',
            isLoaded: false,
            purchases: [],
            step: 1,
            bank: ''
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log('user', user)

        if (user === null) {
            return
        }

        this.setState({
            userId: user.userId
        }, () => {
            this.fetchUser(this.state.userId)
        })
    }

    fetchUser(userId) {
        let url = 'https://localhost:5001/api/user/' + userId
        console.log('url', url)
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    user: json
                })
            });
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
        console.log(event.target)
    }

    handleCheckboxChange = (e, { value }) => {
        this.setState({ shipping: value })
        console.log(this.state.shipping)
    }

    handleDropdownChange = (e, { value }) => {
        this.setState({ bank: value })
        console.log(this.state.bank)
    }
    render() {


        const { step, user } = this.state;
        // const { street, houseNumber, postalCode, shipping, firstName, lastName, email, age, city, country, bank, } = this.state;
        // const values = { street, houseNumber, postalCode, shipping, firstName, lastName, email, age, city, country, bank, };
        switch (step) {
            case 1:
                return (
                    <React.Fragment>

                        <TopHeader />
                        <OrderUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            handleCheckboxChange={this.handleCheckboxChange}
                            handleDropdownChange={this.handleDropdownChange}
                            values={user}
                        // UserDetails={UserDetails}
                        />
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>

                        <TopHeader />
                        <OrderPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleCheckboxChange={this.handleCheckboxChange}
                            handleDropdownChange={this.handleDropdownChange}
                            values={user}
                            bank={this.state.bank}
                        // values={bank}
                        />
                    </React.Fragment>

                )
            case 3:
                return (
                    <React.Fragment>

                        <TopHeader />
                        <OrderConfirmation
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={user}

                        />
                    </React.Fragment>
                )
            case 4:
                return (
                    <React.Fragment>

                        <TopHeader />
                        <OrderSuccess
                            values={user} />
                    </React.Fragment>
                )
        }
    }
} export default OrderPage;

