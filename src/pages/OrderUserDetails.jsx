import React, { Component } from 'react';
import { Segment, Step, Icon, Form, Button, Grid, Divider, Container } from 'semantic-ui-react';


class OrderUserDetails extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props;
        console.log('values', values)
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
                                        <Step active>
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

                                        <Step disabled>
                                            <Icon name='info' />
                                            <Step.Content>
                                                <Step.Title>Confirm Order</Step.Title>
                                            </Step.Content>
                                        </Step>
                                    </Step.Group>

                                </Container>
                                <Container />
                            </div>
                            <Divider hidden />
                            <h1 className="ui centered">Enter User Details</h1>
                            <Segment>
                                <Form color='green' >
                                    <Container>
                                        {/* required min={0} type ='number' */}
                                        <Form.Field >
                                            <label>First name</label>
                                            <input
                                                placeholder='First Name'
                                                onChange={this.props.handleChange('firstname')}
                                                defaultValue={values.firstname}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last name</label>
                                            <input
                                                placeholder='Last Name'
                                                onChange={this.props.handleChange('lastname')}
                                                defaultValue={values.lastname}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Email address</label>
                                            <input
                                                type='email'
                                                placeholder='Email Address'
                                                onChange={this.props.handleChange('email')}
                                                defaultValue={values.email}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Address</label>
                                            <input placeholder='Example: street + house number '
                                                onChange={this.props.handleChange('street')}
                                                defaultValue={values.street}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Postal code</label>
                                            <input placeholder='Postal code'
                                                onChange={this.props.handleChange('postalCode')}
                                                defaultValue={values.postalCode}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>City</label>
                                            <input placeholder='City'
                                                onChange={this.props.handleChange('city')}
                                                defaultValue={values.city}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Country</label>
                                            <input placeholder='Country'
                                                onChange={this.props.handleChange('country')}
                                                defaultValue={values.country}
                                            />
                                        </Form.Field>
                                        <Button type='submit' onClick={this.saveAndContinue}>Save and continue </Button>
                                    </Container>
                                </Form>
                            </Segment>
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

export default OrderUserDetails;