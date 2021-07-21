import SAVE_NEW_HIGHSCORE from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case SAVE_NEW_HIGHSCORE:
            return {
                ...state,
                highscore: action.payload,
            };

        default:
            return state;
    }
};
export default reducer;
