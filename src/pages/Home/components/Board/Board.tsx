import React from 'react';
import { Link } from 'react-router-dom';
import { IHomeBoardProps } from '../../../../common/interfaces/IHomeBoardProps';
import './board.scss';

/**
 * I found this function here: https://stackoverflow.com/questions/1484506/random-color-generator
 * It generates random hex color value.
 * @returns string with color
 */
function setRandomBackgroundColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * This component renders board. Used on home page.
 * @param props that holds title of the board and id
 * @returns jsx element with link to exact board
 */
export default function Board(props: IHomeBoardProps): JSX.Element {
  const { title } = props;
  const { id } = props;
  return (
    <Link
      to={`${process.env.PUBLIC_URL}/board/${id}`}
      style={{ background: setRandomBackgroundColor() }}
      className="home__board-column"
    >
      <div>{title}</div>
    </Link>
  );
}
