import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper } from './../styles/Home.style'

const Home = () => {
    return (
        <Wrapper>
            <Link className='play' to='/play'>PLAY</Link>
            <Link className='rules' to='/rules'>RULES</Link>
            <Link className='seetings' to='/seetings'>SEETINGS</Link>
        </Wrapper>
    )
}

export default Home
