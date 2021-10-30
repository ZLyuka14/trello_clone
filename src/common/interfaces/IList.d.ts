import { ICard } from './ICard';

/**
 * List interface for Board page reducer.
 */
export interface IList {
  id: number;
  title: string;
  cards: ICard[];
}
