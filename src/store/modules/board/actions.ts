import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import api from '../../../api/requests';

/**
 * This function dispatches an action that gets detailed info of the board.
 * @param board_id string id of the board
 * @returns promise
 */
export const getBoard =
  (board_id: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = await api.get(`/board/${board_id}`);
      await dispatch({ type: 'GET_BOARD_BY_ID', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Cant get board with id:${board_id}`,
      });
      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };

/**
 * This function helps to change title of the board.
 * @param board_id string id of the board
 * @param boardTitle new title of the board
 * @returns promise
 */
export const editBoardTitle =
  (board_id: string, boardTitle: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const title = { title: boardTitle };
      await api.put(`/board/${board_id}`, title);
      const data = await api.get(`/board/${board_id}`);
      await dispatch({ type: 'EDIT_BOARD_TITLE', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Cant change board title in board with id:${board_id}`,
      });

      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };

/**
 * This function helps with creating new list.
 * @param board_id string id of the board
 * @param listTitle title of the new list
 * @param listPosition number with position of the new list
 * @returns promise
 */
export const createNewList =
  (board_id: string, listTitle: string, listPosition: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const list = { title: listTitle, position: listPosition };
      await api.post(`/board/${board_id}/list`, list);
      const data = await api.get(`/board/${board_id}`);
      await dispatch({ type: 'CREATE_NEW_LIST', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Cant create new list in board with id:${board_id}`,
      });

      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };

/**
 * This function helps with changing list title.
 * @param board_id string id of the board
 * @param listId number id of the list
 * @param listTitle string changed title
 * @param listPosition number position of the list
 * @returns promise
 */
export const editListTitle =
  (board_id: string, listId: number, listTitle: string, listPosition: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const requestBody = { title: listTitle, position: listPosition };
      await api.put(`/board/${board_id}/list/${listId}`, requestBody);
      const data = await api.get(`/board/${board_id}`);
      await dispatch({ type: 'EDIT_LIST_TITLE', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Cant edit title on list with id:${listId} located in board with id:${board_id}`,
      });

      dispatch({ type: `ERROR in putting new board title for board with id:${board_id}` });
    }
  };

/**
 * This function helps with creating new card on the list.
 * @param board_id string id of the board
 * @param cardTitle string title of the new card
 * @param list_id number id of the new card
 * @param listPosition number position of the list
 * @returns promise
 */
export const createNewCard =
  (board_id: string, cardTitle: string, list_id: number, listPosition: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const card = { title: cardTitle, list_id, position: listPosition + 1 };
      await api.post(`/board/${board_id}/card`, card);
      const data = await api.get(`/board/${board_id}`);
      await dispatch({ type: 'CREATE_NEW_CARD', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Cant create new card on list with id:${list_id} located in board with id:${board_id}`,
      });

      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };
