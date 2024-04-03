import React from 'react';
import './Home.css';
import data from '../data/data';

import Card from './Card';


const Home = () => {

    return (
      <div className='home-container'>
        <div className='movie-tab'>
          <h3>Welcome to my webSite! pick your favourite movie</h3>
          {data.result.map((item, index) => <Card {...item} key={index}/>)}
        </div>

      </div>
    )
  }

  export default Home;