import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { fetchQuizQuestions, QuestionState} from './../../API/api';
import { Wrapper } from '../../styles/Play.styles';

export type AnswerObject = {
    question: string;
    answer: string;
    isCorrect: boolean;
    correctAnswer: string;
}

const Play: React.FC = () => {
    const totalQuestions = Number(localStorage.getItem('number')) || 10;
    const difficulty = localStorage.getItem('difficulty') || 'easy';

    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);



    const start = async () => {
        setIsLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(totalQuestions, difficulty);
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setIsLoading(false);
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const isCorrect = questions[number].correct_answer === answer;
            if (isCorrect) setScore(prev => prev + 100);
            const answerObject = {
                question: questions[number].question,
                answer,
                isCorrect,
                correctAnswer: questions[number].correct_answer
            }
            setUserAnswers(prev => [...prev, answerObject]);
        }
    }

    const nextQuestion = () => {
        const nextNum = number + 1;
        if (nextNum === totalQuestions) {
            setGameOver(true);
        } else {
            setNumber(nextNum);
        }
    }
    return (

            <Wrapper>
                
                {gameOver || userAnswers.length === totalQuestions ? (
                    <button className='start' onClick={start}>
                        START
                    </button>
                ) : null}
                {!gameOver && <p className='score'>Score: {score}/{totalQuestions * 100}</p>}
                {isLoading && <p>Loading Questions ...</p>}



                {!isLoading && !gameOver && <QuestionCard questionNumber={number + 1} totalQuestions={totalQuestions}
                    question={questions[number].question} answers={questions[number].answers}
                    userAnswers={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer} />}
                {!gameOver && !isLoading && userAnswers.length === number + 1 && number !== totalQuestions - 1 && (
                    <button className='next' onClick={nextQuestion}>NEXT QUESTION</button>
                )}

            </Wrapper>
       
    )
}

export default Play;