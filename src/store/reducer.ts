import { combineReducers } from 'redux';
import boardReducer from './modules/board/reducer';
import boardsReducer from './modules/boards/reducer';
import userReducer from './modules/user/reducer';

/**
 * This code combines all app reducers.
 */
export default combineReducers({
  board: boardReducer,
  boards: boardsReducer,
  user: userReducer,
});
