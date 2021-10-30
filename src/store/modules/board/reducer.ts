import { IList } from '../../../common/interfaces/IList';
import { IUser } from '../../../common/interfaces/IUser';

const initialState = {
  title: '',
  users: [] as IUser[],
  lists: [] as IList[],
} as BoardType;

type BoardType = {
  title: string;
  users: [{ id: number; username: string }];
  lists: [{ id: number; title: string; cards: [{ id: number; title: string; description: string; users: number[] }] }];
};

export default function reducer(state = initialState, action: { type: string; payload: BoardType }): BoardType {
  switch (action.type) {
    case 'GET_BOARD_BY_ID': {
      return { ...state, title: action.payload.title, users: action.payload.users, lists: action.payload.lists };
    }

    case 'EDIT_BOARD_TITLE': {
      return { ...state, title: action.payload.title };
    }

    case 'CREATE_NEW_LIST': {
      return { ...state, lists: action.payload.lists };
    }

    case 'EDIT_LIST_TITLE': {
      return { ...state, lists: action.payload.lists };
    }

    case 'CREATE_NEW_CARD': {
      return { ...state, lists: action.payload.lists };
    }

    default: {
      return { ...state };
    }
  }
}
