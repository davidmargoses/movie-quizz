import '../styles/QuestionScreen.style.css';
import React, { useState } from 'react';
import axios from 'axios';
import series from '../helpers/questionsData';

const QuestionScreen = () => {
    const seriesNumber = Math.floor(Math.random() * series.length);
    const questionsData = series[seriesNumber].questions;
    const startIndex = 0;
    const stopIndex = questionsData.length - 1;

    const [score, setScore] = useState(0);
    const [indexQuestion, setIndexQuestion] = useState(startIndex);
    const [disableButton, setDisableButton] = useState(false);

    const getActor = () => {
        return questionsData[indexQuestion].people;
    };

    const getMovie = () => {
        return questionsData[indexQuestion].movie;
    };

    const sendAnswer = async (userAnswer) => {
        setDisableButton(true);
        const body = {
            movie: getMovie(),
            people: getActor(),
            value: userAnswer,
        };

        const response = await axios.post('http://localhost:3001/answer', body);

        const result = response.data.result;
        result && setScore(score + 1);
        if (indexQuestion < stopIndex) {
            setIndexQuestion(indexQuestion + 1);
            setDisableButton(false);
        }
    };

    const questionContainer = () => {
        return (
            <div className="question">
                <div>
                    <div>
                        <span>
                            Did <span>{getActor()}</span> play in <span>{getMovie()}</span> ?
                        </span>
                    </div>
                    <div className="image-container">
                        <span>IMAGE Movie</span>
                        <span>IMAGE Actor</span>
                    </div>
                    <div>
                        <button onClick={(e) => sendAnswer(false)} disabled={disableButton}>
                            NO
                        </button>
                        <button onClick={(e) => sendAnswer(true)} disabled={disableButton}>
                            YES
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="question-main-container">
            <div>
                <div>
                    <h2>MOVIE-QUIZ</h2>
                    <h3>SCORE : {score}</h3>
                </div>
                <div>{questionContainer()}</div>
            </div>
        </div>
    );
};

export default QuestionScreen;
