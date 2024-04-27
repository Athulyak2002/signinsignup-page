import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <h2>Home <Link to="/signin">sign-in</Link></h2>
  )
}

export default Home;