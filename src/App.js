import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './Components/WelcomeScreen';
import QuestionScreen from './Components/QuestionScreen';
import GameOverScreen from './Components/GameOverScreen';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/gameover" component={GameOverScreen} />
                <Route path="/quiz" component={QuestionScreen} />
                <Route path="/" component={WelcomeScreen} />
            </Switch>
        </Router>
    );
}

export default App;
