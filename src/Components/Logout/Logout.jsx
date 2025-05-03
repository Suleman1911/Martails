import React from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('logedInUser'); 
    navigate('/'); 
  };

  return (
    <>
      <button className='logoutbtn' onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Logout;
