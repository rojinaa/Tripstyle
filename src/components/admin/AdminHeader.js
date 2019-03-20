import React, { Component } from 'react';
import TopHeader from './AdminTopHeader';
import { Container, Menu, MenuItem, Button, Item,  } from 'semantic-ui-react';
import Footer from '../Footer';
import { Grid, Image, Card, CardContent, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
 
export default class AdminPage extends Component {
    displayName = AdminPage.name
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false
        }
      }
    handleclick (e) { console.log()}

    componentDidMount() {
        fetch('https://localhost:5001/api/product')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json
            })
          });
      }

    render() {
    var { isLoaded, items, images } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    if (items && (items.length)) {
      return (
        <div>
        <TopHeader />
        <Container>
        <Grid>
          <Grid.Row columns={5} centered relaxed>
            {items.map(item => (
              <Grid.Column key={item.productId}>
                  <Link to= {'/admin/product/' + item.productId}>
                  <Card color='teal'>
                      <Image src= {item.image} />
                    <CardContent>
                    
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Meta>
                      {/* <Button circular size='small' color='green' onClick={this.handleclick}>+</Button> */}
                      In Stock: {item.stock +" "}
                      {/* <Button circular size='small' color='red' onClick={this.handleclick}>-</Button> */}
                      </Card.Meta>
                      <Card.Meta> </Card.Meta>
                      <Card.Meta>

                      Product Price: {item.price +" "}

                      </Card.Meta>
                      Click to Adjust
                    </CardContent>
                  </Card>
                  <Divider hidden />
                  </Link>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        </Container>
      <Footer />
  </div>
      )
    } else {
      return <div>No items found</div>
    }
  }
}

// import React, { Component } from 'react';
// import TopHeader from './Header';
// import FilterGrid from './FilterGrid';
// import FilterDropdown from './FilterDropdown';
// import { Container, Menu, MenuItem, Button,  } from 'semantic-ui-react';
// import Footer from './Footer';
// import { NavLink } from 'react-router-dom';
 
 
// export default class AdminPage extends Component {
//     displayName = AdminPage.name
 
//     render() {
//         return (
//             <div>
//                 <TopHeader />
//                 <Container>
//                     <Menu borderless size='massive' color='grey' inverted>
//                         <MenuItem>
//                             <Button basic compact secondary as={NavLink} to='/'>
//                                 <h1>TripStyle</h1>
//                             </Button>
//                         </MenuItem>
//                         <MenuItem position='right'>
//                         </MenuItem>
//                         <MenuItem className="Login" position='right'>
//                         </MenuItem>
//                         <MenuItem>
//                         </MenuItem>
//                     </Menu>
//                 </Container>
//                 <Footer />
//             </div>
//         );
//     }
// }