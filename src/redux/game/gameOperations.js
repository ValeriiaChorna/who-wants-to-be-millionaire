import gameActions from './gameActions';
import levels from '../../content/gameLevels.json';

const onGame = () => dispatch => {
  dispatch(gameActions.gameStatusActive('active'));
  dispatch(gameActions.gameUserCoins(0));
  addUserLevel(0);
};

const offGame = () => dispatch =>
  dispatch(gameActions.gameStatusInactive('inactive'));

const restartGame = () => dispatch => {
  dispatch(gameActions.gameStatusInactive('restart'));
  addUserLevel(0);
};

const addUserCoins = amount => dispatch =>
  dispatch(gameActions.gameUserCoins(amount));

const addUserLevel = level => dispatch => {
  const item = {
    level,
    amount: levels[level],
  };
  dispatch(gameActions.gameUserLevel(item));
};

export default {
  onGame,
  offGame,
  restartGame,

  addUserCoins,
  addUserLevel,
};
