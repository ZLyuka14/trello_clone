import React from 'react';
import { connect } from 'react-redux';
import './home.scss';
import { getBoards } from '../../store/modules/boards/actions';
import Board from './components/Board/Board';
import { IBoard } from '../../common/interfaces/IBoard';
import NewBoardModal from './components/NewBoardModal/NewBoardModal';
import { IGlobalState } from '../../common/interfaces/IGlobalState';
import { IHomeBoardProps } from '../../common/interfaces/IHomeBoardProps';

type PropsType = {
  boards: [];
  getBoards: () => Promise<void>;
};

/**
 * This function helps with showing modal that creates helps to create new board.
 */
function showModal(): void {
  const modal = document.querySelector('.modal');
  modal?.classList.toggle('hide');
}

/**
 * This class renders home page. Page contains list of boards.
 */
class Home extends React.Component<PropsType, IGlobalState> {
  async componentDidMount(): Promise<void> {
    const { getBoards: get } = this.props;
    await get();
  }

  render(): JSX.Element {
    const { boards } = this.props;
    return (
      <div className="container">
        <h1 className="home__title">Мои доски</h1>
        <div className="home__boards-row">
          {boards.map((board: IBoard) => (
            <Board key={board.id} id={board.id} title={board.title} />
          ))}
          <div className="home__board-column last-column">
            <button onClick={showModal} className="home__btn">
              Создать доску
            </button>
          </div>
        </div>
        <NewBoardModal />
      </div>
    );
  }
}

const mapStateToProps = (state: IGlobalState): IHomeBoardProps[] => ({
  ...state.boards,
});

export default connect(mapStateToProps, { getBoards })(Home);
