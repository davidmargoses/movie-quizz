import '../styles/WelcomeScreen.style.css';
import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ScoreContext from '../Context/Score/ScoreContext';
import Cookies from 'js-cookie';

const WelcomeScreen = () => {
    const { highscore, saveNewScore } = useContext(ScoreContext);
    const history = useHistory();
    const startButton = () => {
        history.push('/quiz');
    };

    useEffect(() => {
        getHighscoreFromCookie();
    }, []);

    const getHighscoreFromCookie = () => {
        const highscoreFromCookie = Cookies.get('userHighscore');
        if (highscoreFromCookie) saveNewScore(parseInt(highscoreFromCookie));
    };

    return (
        <div className="main-container">
            <div>
                <div>
                    <h2>MOVIE-QUIZ</h2>
                    <h3>HIGHSCORE : {highscore}</h3>
                </div>
                <div>
                    <h1>Welcome to the quizz !</h1>
                    <div>
                        <h3>You'll be asked a series of "Yes or No" questions.</h3>
                        <h3>Answer as many as you can in the allowed time !</h3>
                        <h3>Good luck !</h3>
                    </div>
                    <button onClick={startButton}>Start</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
