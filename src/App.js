import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout >
        <Header className='header-color' title="Colin Toft" scroll>
            <Navigation >
                <Link to='/'>Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me </Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Colin Toft">
            <Navigation>
                <Link to='/home'>Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me </Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
</div>
  );
}

export default App;
