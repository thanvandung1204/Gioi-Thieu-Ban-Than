import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return <div className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <i style={{ fontSize: 70, color: 'rgb(214, 153, 11)' }} className="fa fa-dove"></i>
        </a>

        <button className='btn btn-sm'>Work With Me</button>
      </div>
    </div>

  </div>;
};

export default Header;
