import React from 'react'
import {Link}  from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to="/"><button className='btn'>Home</button></Link>
      <Link to="/list"> <button className='btn'>PokemonList </button></Link>
    </div>
  );
};

export default Nav