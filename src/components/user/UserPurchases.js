import React, { Component } from 'react'
import { Grid, Accordion, Icon, Table } from 'semantic-ui-react'

class UserPurchases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        if (this.props.purchases === undefined) {
            return <div>Loading...</div>;
        }
        console.log(this.props.purchases)
        const { activeIndex } = this.state
        return (

            <Grid centered columns={2}>
                <Grid.Column>
                    <Accordion styled>
                        {this.props.purchases.map((purchase, index) => (
                            <React.Fragment>

                                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                                    <Icon name='dropdown' />
                                    Purchased on {purchase.orderDate}
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === index}>

                                    <Table basic='very' celled collapsing>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Product name</Table.HeaderCell>
                                                <Table.HeaderCell>Quantity</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>


                                            {purchase.purchaseLines.map(purchaseLine => (


                                                <Table.Row>
                                                    <Table.Cell>{purchaseLine.product.name}</Table.Cell>
                                                    <Table.Cell>{purchaseLine.quantity}</Table.Cell>
                                                </Table.Row>

                                            ))}
                                        </Table.Body>
                                    </Table>

                                </Accordion.Content>
                            </React.Fragment>
                        ))}

                    </Accordion>

                </Grid.Column>
            </Grid>

        )
    }
}

export default UserPurchases;