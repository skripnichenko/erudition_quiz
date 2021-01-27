import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper } from './../styles/Home.style'

const Home = () => {
    return (

            <Wrapper>
                <button className='play'>
                    <Link className='play-button' to='/play'>PLAY</Link>
                </button>
                
                    <button className='rules'>
                        <Link  to='/rules'>RULES</Link>
                    </button>
                    <button className='seetings' >
                        <Link to='/seetings'>SEETINGS</Link>
                    </button>
                
                </Wrapper>
    )
}

export default Home
