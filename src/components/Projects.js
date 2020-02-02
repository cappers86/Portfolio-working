import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

toggleCategories() {
    if(this.state.activeTab === 0){
        return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:'url(data:image/jpeg;base64,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) center / cover'}}>HTML/CSS project #1</CardTitle>
                        <CardText>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nisl scelerisque, semper arcu et, pulvinar mauris. Quisque aliquam purus nisl, eu condimentum ipsum commodo ac. Proin accumsan interdum purus, id molestie ligula pharetra non. Aenean eget nisi at purus interdum pretium eget ut dui. Maecenas faucibus ipsum nec eros elementum hendrerit. Fusce ut pellentesque purus. Fusce vel justo venenatis nulla gravida posuere. Maecenas condimentum ante sed leo ultrices, sit amet auctor purus venenatis. Pellentesque at euismod est, in malesuada urna. 
                         </CardText>
                         <CardActions border>
                             <Button colored>Github</Button>
                             <Button colored>CodePen</Button>
                             <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                </Card>
            )
    } else if(this.state.activeTab === 1) {
        return(
            <div><h1>This is JavaScript</h1></div>

        )
    } else if(this.state.activeTab === 2) {
        return(
            <div><h1>This is React</h1></div>

        )
    } else if(this.state.activeTab === 3) {
        return(
            <div><h1>This is React Native</h1></div>

        )
    } else if(this.state.activeTab === 4) {
        return(
            <div><h1>This is Node JS</h1></div>

        )
    } else if(this.state.activeTab === 5) {
        return(
            <div><h1>This is Bootstrap</h1></div>

        )
    } else if(this.state.activeTab === 6) {
        return(
            <div><h1>This is SQL</h1></div>

        )
    }
}

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Node JS</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>SQL</Tab>
                </Tabs>

                <section className='projects-grid'>
                   <Grid className='projects-grid'>
                       <Cell col={12}>
                           <div className='content'>{this.toggleCategories()}</div>
                       </Cell>
                   </Grid>
        
                </section>
            </div>
        )
    }
}

export default Projects;