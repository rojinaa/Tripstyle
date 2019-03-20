import React, { Component } from 'react';
import { Container, Image, Divider, Header, List } from 'semantic-ui-react'
import TopHeader from '../../components/Header'

class ProjectInfo extends Component {

    render() {
        return (
            <div>
                    <TopHeader />

                <Divider hidden />
                <Divider hidden />
                <Container textAlign='center'>
                    <Header size='huge'>
                        Projectgroup TripStyle
                        </Header>
                    <Divider hidden />
                    For Project C we were asked to make a webshop and that's why we had decided to build TripStyle. Our projectgroup consists of 5 members. The members are Joost Stam, Griffin Linckens, Alexander van Woensel, Tim Hoeneveld and Rojina Roshaninejad. TripStyle was build using ReactJS, Semantic-UI, SQLite, .NET Core, GitHub, SourceTree, Postman and Visual Studio Code.
                        </Container>
                <Divider hidden />
                <Container textAlign='center'>
                    All the documentation regarding this project can be found in the following links:
                        <Divider hidden />
                    <List>
                        <List.Item>- Github:   <a href="https://github.com/0nlysn0w/tripstyle_rebuild">Client</a> & <a href="https://github.com/0nlysn0w/TripStyle.Api">Api</a></List.Item>
                        <List.Item>- Github OLD:   <a href="https://github.com/0nlysn0w/TripStyle.Client"> OLD Client</a></List.Item>
                        <List.Item>- Trello:   <a href="https://trello.com/tripstyle"> Trello</a></List.Item>
                    </List>
                    Projectgroup TripStyle hopes you enjoy the finished result of our hard work. If there are any further questions then you can contact us using the provided contact information or by sending a mail to: tripstylecustomerservice@gmail.com
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />           
                </Container>
            </div>
        );
    }
}


export default ProjectInfo;