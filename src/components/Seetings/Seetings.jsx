import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '../../styles/Seetings.style';

const numbers = [5, 10, 15, 20];
const difficult = ['easy', 'medium', 'hard'];

const Seetings = () => {
    const numRef = useRef(null);
    const difRef = useRef(null);

    const [visibleNumber, setVisibleNumber] = useState(false);
    const [activeNumber, setActiveNumber] = useState(10);
    
    const [visibleDifficulty, setVisibleDifficulty] = useState(false);
    const [activeDifficulty, setActiveDifficulty] = useState('easy');

    const outSideClick = (e) => {
        if ((numRef.current && !numRef.current.contains(e.target)) && (difRef.current && !difRef.current.contains(e.target))) {
            setVisibleNumber(false);
            setVisibleDifficulty(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', outSideClick, true);
        return () => {
            document.removeEventListener('click', outSideClick, true);
        };
    });

    useEffect(() => {
        setActiveNumber(localStorage.getItem('number') || 10);
        setActiveDifficulty(localStorage.getItem('difficulty') || 'easy')
    }, []);

    const toggleVisibleNumber = () => {
        setVisibleNumber(prev => !prev)
    }
    const changeActiveNumber = (el) => {
        setActiveNumber(el);
        setVisibleNumber(false);
    }
    const toggleVisibleDifficulty = () => {
        setVisibleDifficulty(prev => !prev)
    }
    const changeActiveDifficulty = (el) => {
        setActiveDifficulty(el);
        setVisibleDifficulty(false);
    }
    const saveParams = () => {
        localStorage.setItem('number', activeNumber);
        localStorage.setItem('difficulty', activeDifficulty);
        setVisibleNumber(false);
        setVisibleDifficulty(false);
    }
    return (
        <Wrapper>
            <div ref={numRef} className="sort">
                <div className="sort__label">
                    <svg
                        className={visibleNumber ? 'rotated' : ''}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Choose the number of questions:</b>
                    <span onClick={() => toggleVisibleNumber()}>{activeNumber}</span>
                    {visibleNumber &&
                        (<div className="sort__popup">
                            <ul>
                                {numbers && numbers.map((el, i) => {
                                    return <li key={i} onClick={() => changeActiveNumber(el)}>{el}</li>
                                })}
                            </ul>
                        </div>
                        )}</div>
            </div>

            <div ref={difRef} className="sort">
                <div className="sort__label">
                    <svg
                        className={visibleDifficulty ? 'rotated' : ''}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Choose the difficulty:</b>
                    <span onClick={() => toggleVisibleDifficulty()}>{activeDifficulty}</span>
                    {visibleDifficulty &&
                        (<div className="sort__popup">
                            <ul>
                                {difficult && difficult.map((el, i) => {
                                    return <li key={i} onClick={() => changeActiveDifficulty(el)}>{el}</li>
                                })}
                            </ul>
                        </div>
                        )}
                </div>
            </div>
            <button className='save' onClick={saveParams}>
                SAVE
                    </button>
        </Wrapper>
    )
}

export default Seetings;