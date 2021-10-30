import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import './card.scss';

/**
 * This component renders card.
 * @param props with card data
 * @returns jsx element
 */
export default function Card(props: ICard): JSX.Element {
  const { title } = props;
  return <li className="card">{title}</li>;
}
