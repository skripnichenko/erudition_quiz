import React from 'react';
import { Wrapper } from './../../styles/Rules.style';

const Rules = () => {
    return (
        <Wrapper>
            <p>
                You have a question and 4 possible answers. If you answer incorrectly,
                the answer will be highlighted in red. If correctly, it will be highlighted in green
                and you will receive 100 points. The more points you get, the smarter you are.
            </p>
            <p>
                You also have the ability to change the number and difficulty of questions in
                the settings. Good luck!
            </p>



        </Wrapper>
    )
}

export default Rules;
