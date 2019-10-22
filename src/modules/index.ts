import { combineReducers } from 'redux';
import send from './send';

const rootReducer = combineReducers({
    send
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
