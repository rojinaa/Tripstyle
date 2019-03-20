import React, { Component } from 'react';
import TopHeader from './AdminTopHeader';
import { Container, Menu, MenuItem, Button, Item,  } from 'semantic-ui-react';
import Footer from '../Footer';

import { Grid, Image, Card, CardContent, Icon, Divider } from 'semantic-ui-react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
 
export default class AdminUserPage extends Component {
    displayName = AdminUserPage.name
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false
        }
      }
    handleclick (e) { console.log()}

    componentDidMount() {
        fetch('https://localhost:5001/api/user')
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
      //console.log(this.state.items[0].images[0].url)
      return (
        <div>
        <TopHeader />
        <Container>
        <Grid>
          <Grid.Row columns={3} centered relaxed>
            {items.map(item => (
              <Grid.Column key={item.firstname}>
                  <Link to= {'/admin/userid/' + item.userId}>
                  <Card color='teal'>
                    <CardContent>
                    
                      <Card.Header>{item.email}</Card.Header>
                      <Card.Meta>
                      {/* <Button circular size='small' color='green' onClick={this.handleclick}>+</Button> */}
                      Name: {item.firstname +" "}
                      {/* <Button circular size='small' color='red' onClick={this.handleclick}>-</Button> */}
                      </Card.Meta>
                      <Card.Meta> </Card.Meta>
                      <Card.Meta>

                      Last name: {item.lastname +" "}

                      </Card.Meta>
                      <Card.Meta>

                        Gender: {item.gender +" "}

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