import React from 'react';
import ReactDOM from 'react-dom/client';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo1">Vibes.</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/12032336/pexels-photo-12032336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo" />
                <span>Daniel</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar