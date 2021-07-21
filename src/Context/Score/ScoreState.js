import React, { useReducer } from 'react';

import ScoreContext from './ScoreContext';
import ScoreReducer from './ScoreReducer';
import SAVE_NEW_HIGHSCORE from '../types';

const ScoreState = (props) => {
    const initialState = {
        highscore: 0,
    };

    const [state, dispatch] = useReducer(ScoreReducer, initialState);

    const saveNewScore = (score) => dispatch({ type: SAVE_NEW_HIGHSCORE, payload: score });

    return (
        <ScoreContext.Provider
            value={{
                highscore: state.highscore,
                saveNewScore,
            }}
        >
            {props.children}
        </ScoreContext.Provider>
    );
};

export default ScoreState;
