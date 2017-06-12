import React from 'react';
import Link from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Blog</h1>
                <Link to='/'>Home</Link>
                <Link to='/addpost'>Add Post</Link>
            </div>
        )
    }
}

export default Header;