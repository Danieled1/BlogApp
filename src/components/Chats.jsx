import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './Search';
const Chats = () => {
    return (
        <div className='chats search'>
            <div className="userChat">
                <img 
                    src="https://images.pexels.com/photos/12032336/pexels-photo-12032336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="photo" 
                />
                <div className="userChatInfo">
                    <span>Tevel</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img 
                    src="https://images.pexels.com/photos/12032336/pexels-photo-12032336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="photo" 
                />
                <div className="userChatInfo">
                    <span>Tevel</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img 
                    src="https://images.pexels.com/photos/12032336/pexels-photo-12032336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="photo" 
                />
                <div className="userChatInfo">
                    <span>Tevel</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats