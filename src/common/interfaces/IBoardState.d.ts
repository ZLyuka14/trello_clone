import { IUser } from './IUser';
import { IListProps } from './IListProps';

/**
 * Board interface for detailed board page.
 */
export interface IBoardState {
  title: string;
  users: IUser[];
  lists: IListProps[];
}
