import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './Components/WelcomeScreen';
import QuestionScreen from './Components/QuestionScreen';
import GameOverScreen from './Components/GameOverScreen';
import ScoreState from './Context/Score/ScoreState';

function App() {
    return (
        <ScoreState>
            <Router>
                <Switch>
                    <Route path="/gameover" component={GameOverScreen} />
                    <Route path="/quiz" component={QuestionScreen} />
                    <Route path="/" component={WelcomeScreen} />
                </Switch>
            </Router>
        </ScoreState>
    );
}

export default App;
