import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import api from '../../../api/requests';
import { IBoard } from '../../../common/interfaces/IBoard';

type BoardsList = {
  boards: IBoard[];
};

type CreateResponse = {
  result: string;
  id: number;
};

/**
 * This function helps with getting boards array from the backend.
 * @returns promise
 */
export const getBoards =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data: BoardsList = await api.get('/board');
      await dispatch({ type: 'UPDATE_BOARDS', payload: data.boards });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Cant get boards list from server. Try to reload page.',
      });

      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };

/**
 * This function helps with creating new board on the homepage. New board will be empty.
 * @param boardTitle string title of the new board
 * @returns promise
 */
export const createBoard =
  (boardTitle?: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const title = { title: boardTitle };
      const response: CreateResponse = await api.post('/board', title);
      if (response.result === 'Created') {
        const data: BoardsList = await api.get('/board');
        await dispatch({ type: 'CREATE_NEW_BOARD', payload: data.boards });
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Cant create new board. Try to reload page and try again.',
      });

      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };
