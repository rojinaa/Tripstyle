import React, { Component } from 'react';
import { Segment, Step, Icon, Button, List, Grid, Divider, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions'

import * as cookie from '../helpers/cookie.js';
class OrderConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.props.dispatch(userActions.remember(user));
        }
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();

        let PurchaseLines = []

        this.state.products.map(product => {
            let line = {
                ProductId: product.productId,
                Name: product.name,
                Make: product.make,
                Price: product.price,
                Quantity: product.quantity
            }
            PurchaseLines.push(line);
        })

        console.log('this.props.user.userId', this.props.user.userId)

        fetch('https://localhost:5001/api/purchase', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IsConfirmed: true,
                UserId: this.props.user.userId,
                PurchaseLines: PurchaseLines

            })
        })

        PurchaseLines.map(PurchaseLine => {
            let stock = ''
            console.log('url', 'https://localhost:5001/api/product/' + PurchaseLine['ProductId'])
            fetch('https://localhost:5001/api/product/' + PurchaseLine['ProductId'])
                .then(res => res.json)
                .then(json => {
                    stock = json.stock
                })
            
            fetch('https://localhost:5001/api/product/' + PurchaseLine.productId, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stock: stock - PurchaseLine.Quantity
                })
            })
        });
            
        cookie.set('cart', '[]')
        console.log(this.state);

    }

    componentDidMount() {
        this.fetchCart()
    }

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
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { street, postalCode, firstname, lastname, email, city, country } } = this.props;

        console.log('this.state.products', this.state.products)
        console.log(this.state.bank)
        return (
            <div>
                {/* <TopHeader /> */}
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Container>
                            {/* <OrderSteps /> */}
                            <div>
                                <Container textAlign='center'>
                                    <Step.Group widths={3}>
                                        <Step disabled>
                                            <Icon name='truck' />
                                            <Step.Content>
                                                <Step.Title>Shipping</Step.Title>
                                                <Step.Description>Choose your shipping options</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step disabled>
                                            <Icon name='payment' />
                                            <Step.Content>
                                                <Step.Title>Billing</Step.Title>
                                                <Step.Description>Enter billing information</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step active>
                                            <Icon name='info' />
                                            <Step.Content>
                                                <Step.Title>Confirm Order</Step.Title>
                                            </Step.Content>
                                        </Step>
                                    </Step.Group>

                                </Container>
                                <Container />
                            </div>
                            <h1 className="ui centered">Confirm your Details</h1>
                            <p>Click Confirm if the following details have been correctly entered</p>
                            <Segment>
                                <List divided relaxed>
                                    <List.Item>
                                        <List.Icon name='users' />
                                        <List.Content>
                                            <List.Header as='a'>First Name</List.Header>
                                            <List.Description>{firstname}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='users' />
                                        <List.Content>
                                            <List.Header as='a'>Last Name</List.Header>
                                            <List.Description>{lastname}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            <List.Header as='a'>E-mail</List.Header>
                                            <List.Description>{email}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='marker' />
                                        <List.Content>
                                            <List.Header as='a'>Location</List.Header>
                                            {/* <List.Description>{city}, {country}</List.Description> */}
                                            <List.List>
                                                <List.Item>
                                                    <List.Icon name='street view' />
                                                    <List.Content>
                                                        <List.Header as='a'>Street</List.Header>
                                                        <List.Description>{street}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                {/* <List.Item>
                                                    <List.Icon name='home' />
                                                    <List.Content>
                                                        <List.Header as='a'>House number</List.Header>
                                                        <List.Description>{houseNumber}</List.Description>
                                                    </List.Content>
                                                </List.Item> */}
                                                <List.Item>
                                                    <List.Icon name='mail square' />
                                                    <List.Content>
                                                        <List.Header as='a'>Postal code</List.Header>
                                                        <List.Description>{postalCode}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='building' />
                                                    <List.Content>
                                                        <List.Header as='a'>City</List.Header>
                                                        <List.Description>{city}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='map' />
                                                    <List.Content>
                                                        <List.Header as='a'>Country</List.Header>
                                                        <List.Description>{country}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            </List.List>
                                        </List.Content>
                                    </List.Item>
                                    {/* <List.Item>
                                        <List.Icon name='money' />
                                        <List.Content>
                                            <List.Header as='a'>Bank</List.Header>
                                            <List.Description>{bank}</List.Description>
                                        </List.Content>
                                    </List.Item> */}
                                </List>
                            </Segment>
                            <Button onClick={this.back}>Back</Button>
                            <Button id="BeeBenson" onClick={this.saveAndContinue}>Confirm</Button>
                        </Container>

                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                {/* <Footer /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user
    }
}

export default connect(mapStateToProps)(OrderConfirmation);