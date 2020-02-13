import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Footer, FooterSection} from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Colin Toft</h2>
                        <img 
                        src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                        alt='avatar'
                        style={{height: '250px'}}
                        />

                        <p style={{width: '75%', margin:'auto', paddingTop: '1em' }}>lorem ddhwoidhwidhwioq hwqodh wiodoqw dhoqwdhwqiodh
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-phone-square' aria-hidden />
                                    07714839855
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-fax' aria-hidden />
                                    07714839855
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-envelope' aria-hidden />
                                    Test@test.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-skype' aria-hidden />
                                    TestSkypeID
                                </ListItemContent>
                            </ListItem>
                                                        
                            
                            

                            
                        </List>
                        </div>
                    </Cell>
                </Grid>
                <Footer className='footer' size="mini">
    <FooterSection type="right" logo="Made by Colin Toft">
       
    </FooterSection>
</Footer>

            </div>
        )
    }
}

export default Contact;