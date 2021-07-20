import '../styles/WelcomeScreen.style.css';
import React from 'react';

const WelcomeScreen = () => {
    return (
        <div className="main-container">
            <div>
                <div>
                    <h2>MOVIE-QUIZ</h2>
                    <h3>HIGHSCORE : 0</h3>
                </div>
                <div>
                    <h1>Welcome to the quizz !</h1>
                    <div>
                        <h3>You'll be asked a series of "Yes or No" questions.</h3>
                        <h3>Answer as many as you can in the allowed time !</h3>
                        <h3>Good luck !</h3>
                    </div>
                    <button>Start</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;