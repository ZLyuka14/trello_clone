import React from 'react';
import { useDispatch } from 'react-redux';
import './NewBoardModal.scss';
import { createBoard } from '../../../../store/modules/boards/actions';
import isValidData from '../../../../api/validation';

/**
 * This function helps to show or hide modal window with form that creates new board.
 */
function toggleModal(): void {
  const modal = document.querySelector('.modal');
  modal?.classList.toggle('hide');
}

/**
 * This function helps with showing and hiding tip about title of the new board.
 * @param remove boolean true if element need to be removed, false if need to be showed
 */
function toggleTip(remove: boolean): void {
  const tip = document.querySelector('.form__tip');
  if (remove) {
    tip?.classList.remove('hidden');
  } else {
    tip?.classList.add('hidden');
  }
}

/**
 * This component helps with creating new board. It validates text before sending it to backend.
 * @returns jsx element with form for creating new board
 */
export default function NewBoardModal(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="modal hide">
      <form className="modal__form form">
        <label className="form__label" htmlFor="title">
          Название доски:
        </label>
        <input id="title" required className="form__input" type="text" />
        <div className="form__buttons">
          <button
            onClick={async (): Promise<void> => {
              const titleText = document.querySelector('.form__input') as HTMLInputElement;
              if (isValidData(titleText.value)) {
                await dispatch(createBoard(titleText.value));
                toggleModal();
                toggleTip(false);
                titleText.value = '';
              } else {
                toggleTip(true);
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
              toggleModal();
              toggleTip(false);
              const titleText = document.querySelector('.form__input') as HTMLInputElement;
              titleText.value = '';
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
