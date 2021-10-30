import React from 'react';
import { useDispatch } from 'react-redux';
import isValidData from '../../../../api/validation';
import { createNewList } from '../../../../store/modules/board/actions';
import './NewListModal.scss';

type ListProps = { numberOfLists: number; boardId: string };

/**
 * This function helps to hide modal.
 */
function hideModal(): void {
  const modal = document.querySelector('.modal');
  modal?.classList.add('hide');
}

/**
 * This function helps to hide tip about new list title.
 */
function hideTip(): void {
  const tip = document.querySelector('#tip');
  tip?.classList.add('hidden');
}

/**
 * This component renders modal that helps with creating new list on the board.
 * @param props for creating new list
 * @returns jsx element
 */
export default function NewListModal(props: ListProps): JSX.Element {
  const { numberOfLists } = props;
  const { boardId } = props;
  const dispatch = useDispatch();

  return (
    <div className="modal list hide">
      <form className="modal__form form">
        <label className="form__label" htmlFor="title">
          Название списка:
        </label>
        <input id="title" required className="form__input" type="text" />
        <div className="form__buttons">
          <button
            onClick={async (e): Promise<void> => {
              e.preventDefault();
              const listTitle = document.querySelector('#title') as HTMLInputElement;
              if (isValidData(listTitle.value)) {
                await dispatch(createNewList(boardId, listTitle.value, numberOfLists));
                hideTip();
                listTitle.value = '';
                hideModal();
              } else {
                const tip = document.querySelector('#tip');
                tip?.classList.remove('hidden');
              }
            }}
            className="form__btn home__btn confirm"
            type="button"
          >
            Подтвердить
          </button>
          <button
            onClick={(e): void => {
              e.preventDefault();
              hideModal();
              hideTip();
              const listTitle = document.querySelector('#title') as HTMLInputElement;
              listTitle.value = '';
            }}
            className="form__btn home__btn cancel"
          >
            Отмена
          </button>
        </div>
        <div id="tip" className="form__tip hidden">
          Имя доски не должно быть пустым. <br /> В названии доски можно использовать:
          <ul>
            <li>цифры</li>
            <li>буквы(а, А)</li>
            <li>пробелы</li>
            <li>тире</li>
            <li>точки</li>
            <li>нижние подчеркивания</li>
          </ul>
        </div>
      </form>
    </div>
  );
}
