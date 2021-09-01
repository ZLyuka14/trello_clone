import React from 'react';
import { IListProps } from '../../../../common/interfaces/IListProps';
import './list.scss';
import Card from '../Card/Card';

export default function List(props: IListProps): JSX.Element {
  const { title } = props;
  const { cards } = props;
  return (
    <li className="list__item">
      <h3 className="list__title">{title}</h3>
      <ul className="list__main">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
        <li>
          <button className="list__btn"> Добавить новую карточку</button>
        </li>
      </ul>
    </li>
  );
}
