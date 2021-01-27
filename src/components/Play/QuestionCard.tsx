import React from 'react';
import { AnswerObject } from './Play';
import { Wrapper, ButtonWrapper } from './../../styles/QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswers: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswers,
    questionNumber,
    totalQuestions
}) => {
    return (
        <Wrapper>
            <p className='number'>
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => {
                    return (
                        <ButtonWrapper key={answer} correct={userAnswers?.correctAnswer === answer}
                            userClicked={userAnswers?.answer === answer}>
                            <button disabled={!!userAnswers} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    )
                })}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;