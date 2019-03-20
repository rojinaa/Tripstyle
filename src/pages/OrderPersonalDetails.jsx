import React, { Component } from 'react';
import { Segment, Step, Icon, Form, Button, Grid, Container, Divider, Dropdown } from 'semantic-ui-react';

class OrderPersonalDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        console.log('this.props.bank', this.props.bank)
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

                                        <Step active>
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
                            <h1 className="ui centered">Select your bank</h1>
                            <Segment>
                                {/* <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' /> */}
                                <Form.Field>
                                    <Dropdown
                                        fluid
                                        placeholder='Bank'
                                        openOnFocus={false}
                                        selection
                                        options={[
                                            { key: 1, text: 'ABN-Amro bank', value: 'ABN-Amro bank' },
                                            { key: 2, text: 'ING', value: 'ING' },
                                            { key: 3, text: 'ASN bank', value: 'ASN bank' },
                                        ]}
                                        onChange={this.props.handleDropdownChange}
                                    />
                                </Form.Field>
                            </Segment>
                            <Button onClick={this.back}>Back</Button>
                            <Button disabled={this.props.bank === ''} onClick={this.saveAndContinue}>Confirm</Button>
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

export default OrderPersonalDetails;