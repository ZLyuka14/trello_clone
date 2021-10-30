import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import api from '../../../api/requests';

/**
 * A stub for getting an array of users from backend.
 * @returns promise
 */
export const getUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = await api.get('/user', { params: { emailOrUsername: 'kbo' } });
      await dispatch({ type: 'GET_USER', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Cant get user with id:`,
      });

      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };
