import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blogs'>Blog</Link>
        </div>
    );
};

export default Header;