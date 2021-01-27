import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }


    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #695d5d);
        border: 2px solid #695d5d;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`;