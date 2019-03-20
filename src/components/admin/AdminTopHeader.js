import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import SearchBarAdmin from './SearchbarAdmin';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


export default class TopHeader extends Component {
    displayName = TopHeader.name

  render() {
    return (
        <Menu borderless size='massive' color='blue' inverted>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/'>
                    <h1>TripStyle</h1>
                </Button>

            </MenuItem>
            <MenuItem>
              <Button basic compact secondary as={NavLink} to='/admin/admin'>
                    <h1>Admin Panel</h1>
                </Button></MenuItem>
            <MenuItem>
             <Button basic compact secondary as={NavLink} to='/admin/user'>
                    <h1>User Panel</h1>
                </Button></MenuItem>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/admin/create'>
                    <h1>Create Product</h1>
                </Button>
            </MenuItem>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/admin/delete'>
                    <h1>Delete Product</h1>
                </Button>
            </MenuItem>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/admin/stat'>
                    <h1>Statistics WebShop</h1>
                </Button>
            </MenuItem>
            <MenuItem position='right'>
                <SearchBarAdmin></SearchBarAdmin>
            </MenuItem>
            <MenuItem>
            </MenuItem>
        </Menu>
    );
  }
}