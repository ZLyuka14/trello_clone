const initialState = [{ id: 1, username: 'string' }] as UserType;

type UserType = [{ id?: number; username?: string }];

/**
 * Stub reducer for users array.
 * @param state
 * @param action
 * @returns
 */
export default function reducer(state = initialState, action: { type: string; payload?: UserType }): UserType {
  switch (action.type) {
    case 'GET_USER': {
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
}
