import { ICard } from './ICard';

/**
 * List interface for List component.
 */
export interface IListProps {
  id: number;
  board_id: string;
  title: string;
  cards: ICard[];
  position: number;
}
