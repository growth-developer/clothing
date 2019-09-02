import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';


// functionalc component - because we do not need to store any data or life cycle methods
const HomePage = () => (
    <div className='homepage'>
       <Directory />
    </div>
)


export default HomePage;