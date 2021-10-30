/* eslint-disable no-console */
import { IBoard } from '../../../common/interfaces/IBoard';

const initialState = {
  boards: [] as IBoard[],
};

type BoardsType = {
  boards: IBoard[];
};

export default function reducer(state = initialState, action: { type: string; payload: IBoard[] }): BoardsType {
  switch (action.type) {
    case 'UPDATE_BOARDS':
      return {
        ...state,
        boards: action.payload,
      };

    case 'CREATE_NEW_BOARD':
      return {
        ...state,
        boards: action.payload,
      };

    default: {
      return { ...state };
    }
  }
}
