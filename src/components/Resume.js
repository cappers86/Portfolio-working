import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experiance from './Experiance';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className='resume-left-col' col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src='data:image/jpeg;base64,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'
                            alt='avatar'
                            style={{height: '200px', borderRadius: '50%'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Colin Toft</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis felis lorem. Duis euismod aliquam erat, non porttitor mi semper vitae. Pellentesque et odio dignissim, luctus nisl dignissim, semper enim. Curabitur lorem massa, lobortis auctor fermentum vitae, sollicitudin pellentesque dui. Duis pretium sagittis ultrices. Donec a risus at urna ultricies.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>xyz, 1234</p>
                        <h5>Phone</h5>
                        <p>079575517290</p>
                        <h5>Email</h5>
                        <p>colinat@hotmail.co.uk</p>
                        <h5>Website</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>

                        <Education 
                        startYear={2002}
                        endYear={2006}
                        schoolName={'My Uni'}
                        schoolDescription={'hey a hsohd ehjohiw ewo'}
                        />
                        <Education 
                        startYear={2007}
                        endYear={2009}
                        schoolName={'My Uni 2'}
                        schoolDescription={'hey a hsohd ehjohiw ewo'}
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}} />

                        <h2>Experiance</h2>

                        <Experiance
                            startYear={2009}
                            endYear={2012}
                            jobName={'Job 1'}
                            jobDescription={'Job description '}
                        />

                        <Experiance
                            startYear={2012}
                            endYear={2015}
                            jobName={'Job 2'}
                            jobDescription={'Job description '}
                        />

                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}} />

                        <h2> Skills </h2>
                        <Skills
                         skill='JavaScript'
                         progress={100}
                        />
                        <Skills
                         skill='HTML/CSS'
                         progress={80}
                        />
                        <Skills
                         skill='React'
                         progress={80}
                        />
                        <Skills
                         skill='Node JS'
                         progress={80}
                        />


                    </Cell>
                     
                </Grid>
            </div>
        )
    }
}

export default Resume;