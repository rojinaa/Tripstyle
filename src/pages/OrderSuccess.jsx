import React, { Component } from 'react';
import { Segment, Step, Icon, Header, Grid, Container, Divider } from 'semantic-ui-react';

class OrderSuccess extends Component {
    render() {
        const { values: { email } } = this.props;
        return (
            <div>
                <Grid>
                    <Grid.Column>
                        <div>
                            <Container textAlign='center'>
                                <Step.Group widths={3}>
                                    <Step completed>
                                        <Icon name='truck' />
                                        <Step.Content>
                                            <Step.Title>Shipping</Step.Title>
                                            <Step.Description>Choose your shipping options</Step.Description>
                                        </Step.Content>
                                    </Step>

                                    <Step completed>
                                        <Icon name='payment' />
                                        <Step.Content>
                                            <Step.Title>Billing</Step.Title>
                                            <Step.Description>Enter billing information</Step.Description>
                                        </Step.Content>
                                    </Step>

                                    <Step completed>
                                        <Icon name='info' />
                                        <Step.Content>
                                            <Step.Title>Confirm Order</Step.Title>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>

                            </Container>
                            <Container />
                        </div>
                        <Container textAlign='center'>
                            <Segment placeholder>
                                <Header icon>
                                    <Icon name='mail' />
                                    <h1 className="ui centered">A mail wil be sent to your email address</h1>
                                    <h1 className="ui centered"><a href=''>{email}</a></h1>
                                </Header>
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

export default OrderSuccess;