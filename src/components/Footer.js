import React, { } from 'react';
import { Menu, Container, Header, Grid, GridRow, Divider } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Menu borderless size='massive' color='grey' inverted>
            <Container>
                <Grid textAlign='center'>
                    <Divider hidden />
                    <GridRow textAlign='center'>
                        <Header color='inverted' textAlign='center'>ABOUT US</Header>
                    </GridRow>
                    <GridRow textAlign='center'>
                        <MenuItem>
                            <List>
                                <List.Item as={Link} to='/logininfo'> Login </List.Item>
                                <List.Item as={Link} to='/ourassortmentinfo'> Our assortment </List.Item>
                            </List>
                        </MenuItem>
                        <MenuItem>
                            <List>
                                <List.Item as={Link} to='/projectinfo'> Project </List.Item>
                                <List.Item as={Link} to='/privacypolicy'> Privacy Policy </List.Item>
                            </List>
                        </MenuItem>
                    </GridRow>
                </Grid>
                <MenuItem position='right'>
                    <div>
                        © 2018 - 2019 - Projectgroup TripStyle
                            </div>
                </MenuItem>
            </Container>
        </Menu>
    );
}

export default Footer;
