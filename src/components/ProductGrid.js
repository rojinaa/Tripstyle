import React, { Component } from 'react'
import { Grid, Image, Card, CardContent, Icon, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  render() {
    // console.log('this.props.products', this.props.products)
    if (this.props.products === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <Grid>
        <Grid.Row columns={this.props.columns} centered relaxed="true">
          {this.props.products.map(product => (
            <Grid.Column key={product.productId}>
              <Link to={'products/' + product.productId}>
                <Card color='teal'>
                  <Image src={product.image} />
                  <CardContent>
                    <Card.Header>
                      <Icon name='euro sign' />{product.price}
                    </Card.Header>

                    <Card.Meta>{product.color}</Card.Meta>
                    <Card.Meta>{product.name}</Card.Meta>
                    <Card.Meta>{product.category.name}</Card.Meta>

                    <Card.Description>{product.region}</Card.Description>
                  </CardContent>
                </Card>
                <Divider hidden />
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    )

  }
}

export default ProductGrid;
