import '../styles/WelcomeScreen.style.css';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const GameOverScreen = () => {
    const history = useHistory();
    const location = useLocation();
    const score = location.state.score;
    const reStartButton = () => {
        history.push('/quiz');
    };
    return (
        <div className="main-container">
            <div>
                <div>
                    <h2>MOVIE-QUIZ</h2>
                </div>
                <div>
                    <h2>GAME OVER</h2>
                    <div>
                        <h3>SCORE : {score}</h3>
                    </div>
                    <button onClick={reStartButton}>RETRY</button>
                </div>
            </div>
        </div>
    );
};

export default GameOverScreen;
