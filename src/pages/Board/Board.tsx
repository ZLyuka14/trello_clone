import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import List from './components/List/List';
import './board.scss';
import { getBoard, editBoardTitle } from '../../store/modules/board/actions';
import isValidData from '../../api/validation';
import NewListModal from './components/NewListModal/NewListModal';
import { IGlobalState } from '../../common/interfaces/IGlobalState';
import { IBoardState } from '../../common/interfaces/IBoardState';

type TParams = { board_id: string };

type BoardTypeMethods = {
  getBoard: (board_id: string) => Promise<void>;
  editBoardTitle: (board_id: string, boardTitle: string) => Promise<void>;
};

type BoardType = IBoardState & BoardTypeMethods;

type PropsType = RouteComponentProps<TParams> & BoardType;

/**
 * This class renders detailed Board page.
 */
class Board extends React.Component<PropsType, IBoardState> {
  async componentDidMount(): Promise<void> {
    const { match } = this.props;
    const { getBoard: get } = this.props;
    await get(match.params.board_id);
  }

  render(): JSX.Element {
    const { match } = this.props;
    const { lists } = this.props;
    const { title } = this.props;
    const { editBoardTitle: edit } = this.props;

    return (
      <div className="board__wrapper">
        <div className="board__header">
          <Link to={`${process.env.PUBLIC_URL}/`} className="home-btn board__btn">
            Домой
          </Link>
          <h1
            onKeyDown={async (e): Promise<void> => {
              if (e.key === 'Enter') {
                e.preventDefault();
                const boardTitle = document.querySelector('h1');
                if (boardTitle?.textContent && isValidData(boardTitle?.textContent)) {
                  boardTitle?.blur();
                }
              }
            }}
            onBlur={async (): Promise<void> => {
              const boardTitle = document.querySelector('h1');
              if (boardTitle?.textContent && isValidData(boardTitle?.textContent)) {
                await edit(match.params.board_id, boardTitle?.textContent);
              }
            }}
            className="board__title"
            contentEditable
            suppressContentEditableWarning
          >
            {title}
          </h1>
          <h3 className="board__id">{match.params.board_id}</h3>
        </div>
        <div className="board__content">
          <ul className="board__lists">
            {lists.map((list) => (
              <List
                key={list.id}
                position={list.position}
                board_id={match.params.board_id}
                id={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <button
              onClick={(): void => {
                const modal = document.querySelector('.modal');
                modal?.classList.remove('hide');
              }}
              className="board__btn"
            >
              Добавить новый список
            </button>
          </ul>
          <div className="modal__container">
            <NewListModal boardId={match.params.board_id} numberOfLists={lists.length} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IGlobalState): IBoardState {
  const { board } = state;
  const { lists } = board;
  const { users } = board;
  const { title } = board;

  return { title: title.valueOf(), lists: Object.values(lists), users: [...users] };
}

export default withRouter(connect(mapStateToProps, { getBoard, editBoardTitle })(Board));
