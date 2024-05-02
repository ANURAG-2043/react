import React from 'react'


const Navbar = () => {
  return (
    <div className=' flex h-[60px] bg-white mx-2 gap-2 rounded-lg items-center justify-center text-2xl font-medium' >
            <img src='./images/logo.png' alt='logo' width={45}/>
            <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar
