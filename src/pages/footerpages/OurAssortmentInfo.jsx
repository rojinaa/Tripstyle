import React, { Component } from 'react';
import { Container, Image, Divider, Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import ourassortmentinfo from '../../images/ourassortmentinfo.png'
import TopHeader from '../../components/Header'

class OurAssortmentInfo extends Component {

        render() {
            return (
                <div>
                    <TopHeader />

                    <Divider hidden />
                    <Divider hidden />
                    <Container textAlign='center'>
                        <Header size='huge'>
                            Our assortment
                        </Header>
                        <Divider hidden />
                        You can find our assortment <Link to='products'>here</Link> or by following the steps down below.
                        <Image src={ourassortmentinfo} />
                        <Divider hidden />
                    </Container>
                </div>
            );
        }
    }
    

export default OurAssortmentInfo;