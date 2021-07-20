import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './Components/WelcomeScreen';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={WelcomeScreen} />
            </Switch>
        </Router>
    );
}

export default App;
