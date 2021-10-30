import { IBoardType } from './IBoardState';
import IHomeBoardProps from './IHomeBoardProps';
import { IUser } from './IUser';

/**
 * Global state interface.
 */
export interface IGlobalState {
  board: IBoardType;
  boards: IHomeBoardProps[];
  user: IUser[];
}
