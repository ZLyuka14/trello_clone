import React from 'react';
import { useDispatch } from 'react-redux';
import { IListProps } from '../../../../common/interfaces/IListProps';
import './list.scss';
import Card from '../Card/Card';
import { editListTitle, createNewCard } from '../../../../store/modules/board/actions';
import isValidData from '../../../../api/validation';

/**
 * This component renders list.
 * @param props with list data
 * @returns jsx element
 */
export default function List(props: IListProps): JSX.Element {
  const { title } = props;
  const { cards } = props;
  const { id } = props;
  const { board_id: boardId } = props;
  const { position } = props;
  const dispatch = useDispatch();

  return (
    <li className="list__item">
      <h3
        id={`${id}`}
        onKeyDown={async (e): Promise<void> => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const listId = `${id}`;
            const listTitle = document.getElementById(listId) as HTMLHeadingElement;
            if (listTitle?.textContent && isValidData(listTitle?.textContent)) {
              listTitle?.blur();
            }
          }
        }}
        onBlur={async (): Promise<void> => {
          const listId = `${id}`;
          const listTitle = document.getElementById(listId) as HTMLHeadingElement;
          if (listTitle?.textContent && isValidData(listTitle?.textContent)) {
            await dispatch(editListTitle(boardId, id, listTitle.textContent, position));
          }
        }}
        contentEditable
        suppressContentEditableWarning
        className="list__title"
      >
        {title}
      </h3>
      <ul className="list__main">
        {Object.values(cards).map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
        <li>
          <button
            onClick={(): void => {
              const cardCreator = document.querySelector(`#cc-${id}`);
              cardCreator?.classList.remove('cc-hidden');
            }}
            className="list__btn"
          >
            Добавить новую карточку
          </button>
          <div id={`cc-${id}`} className="list__card-creator card-creator cc-hidden">
            <textarea className="card-creator__textArea" name="title" id={`title-${id}`} />
            <div className="card-creator__btns">
              <button
                onClick={async (): Promise<void> => {
                  const cardCreator = document.querySelector(`#cc-${id}`);
                  const cardTitle = document.querySelector(`#title-${id}`) as HTMLInputElement;
                  if (isValidData(cardTitle.value)) {
                    await dispatch(createNewCard(boardId, cardTitle.value, id, position));
                    cardTitle.value = '';
                    const tip = document.querySelector('#cc-tip');
                    tip?.classList.add('cc-hidden');
                    cardCreator?.classList.add('cc-hidden');
                  } else {
                    const tip = document.querySelector('#cc-tip');
                    tip?.classList.remove('cc-hidden');
                  }
                }}
                className="list__btn card-creator__done"
              >
                Готово
              </button>
              <button
                onClick={(): void => {
                  const cardCreator = document.querySelector(`#cc-${id}`);
                  cardCreator?.classList.add('cc-hidden');
                  const cardTitle = document.querySelector(`#title-${id}`) as HTMLInputElement;
                  cardTitle.value = '';
                  const tip = document.querySelector('#cc-tip');
                  tip?.classList.add('cc-hidden');
                }}
                className="list__btn card-creator__cancel"
              >
                Отмена
              </button>
            </div>
          </div>
          <div id="cc-tip" className="cc__tip cc-hidden">
            Название карточки не должно быть пустым. <br /> В названии карточки можно использовать:
            <ul>
              <li>цифры</li>
              <li>буквы(а, А)</li>
              <li>пробелы</li>
              <li>тире</li>
              <li>точки</li>
              <li>нижние подчеркивания</li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  );
}
