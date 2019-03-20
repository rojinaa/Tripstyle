import React, { Component } from 'react';
import { Menu, MenuItem, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import { connect } from 'react-redux';
import { userActions } from '../redux/actions'
import FavoritePopup from './user/FavoritePopup'

class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.props.dispatch(userActions.remember(user));
        }
    }

    logout = () => {
        this.props.dispatch(userActions.logout())
        // window.location.reload(true)
    }

    render() {
        return (
            <Menu borderless size='massive' color='grey' inverted>
                <MenuItem>
                    <Button basic compact secondary as={NavLink} to='/'>
                        <h1>TripStyle</h1>
                    </Button>
                </MenuItem>
                <MenuItem position='right'>
                    <SearchBar></SearchBar>
                </MenuItem>

                <MenuItem className="Login" position='right'>
                    {this.props.user ?
                    <React.Fragment>
                        <FavoritePopup user={this.props.user.userId} />
                        <Button as={NavLink} to='/Login'>Logout</Button>

                        <Button color='green' as={NavLink} to='/user'>{this.props.user.firstname}</Button>
                    </React.Fragment>
                        :
                        <Button color='blue' as={NavLink} to='/login'>Login</Button>
                    }
                </MenuItem>

                <MenuItem>
                    <ShoppingCart />
                </MenuItem>
            </Menu>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user
    }
}

export default connect(mapStateToProps)(TopHeader);