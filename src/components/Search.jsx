import React from 'react';
import ReactDOM from 'react-dom/client';
const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder="Find a user" name="" id="" />
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/12032336/pexels-photo-12032336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo" />
                <div className="userChatInfo">
                    <span>Tevel</span>
                </div>
            </div>
        </div>
    )
}

export default Search