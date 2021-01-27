import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './../styles/Header.styles';

const Header = () => {
    return (
        <Wrapper>
            <div className="header">
                <button className='goBack'>
                    <Link to='/'>⬅</Link>
                </button>
                <h1>ERUDITION QUIZ</h1>
            </div>
        </Wrapper>
    )
}

export default Header;
