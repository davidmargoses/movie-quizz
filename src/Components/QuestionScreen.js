import '../styles/QuestionScreen.style.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import series from '../helpers/questionsData';
import { useHistory } from 'react-router-dom';
import ScoreContext from '../Context/Score/ScoreContext';

const QuestionScreen = () => {
    const { highscore, saveNewScore } = useContext(ScoreContext);
    const history = useHistory();
    const seriesNumber = Math.floor(Math.random() * series.length);
    const questionsData = series[seriesNumber].questions;
    const startIndex = 0;
    const stopIndex = questionsData.length - 1;

    const path_base_url = 'https://image.tmdb.org/t/p/original';

    const [score, setScore] = useState(0);
    const [indexQuestion, setIndexQuestion] = useState(startIndex);
    const [disableButton, setDisableButton] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paths, setPaths] = useState({});
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        getPaths();
    }, [indexQuestion]);

    useEffect(() => {
        if (seconds > 0) setTimeout(() => setSeconds(seconds - 1), 1000);
        else {
            score > highscore ? saveHighscore() : history.push('/gameover', { score });
        }
    });

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

    const getPaths = async () => {
        const body = {
            movie: getMovie(),
            people: getActor(),
        };

        const response = await axios.post('http://localhost:3001/images', body);

        setPaths(response.data);
        setIsLoading(false);
    };

    const saveHighscore = async () => {
        await saveNewScore(score);
        history.push('/gameover', { score });
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
                        <div>
                            <img src={`${path_base_url}${paths.people_path}`} alt="Actor" />
                        </div>
                        <div>
                            <img src={`${path_base_url}${paths.movie_path}`} alt="Movie" />
                        </div>
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
                    <h3>TIME REMAINING : {seconds === 60 ? '1:00' : seconds}</h3>
                    <div>
                        <h3>SCORE : {score}</h3>
                        <h3>HIGHSCORE : {highscore}</h3>
                    </div>
                </div>
                {!isLoading ? <div>{questionContainer()}</div> : null}
            </div>
        </div>
    );
};

export default QuestionScreen;
