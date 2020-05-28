import { ACTION_1, ACTION_TYPE } from '../../../redux/actions/actionTypes';
import { storeReducer } from '../../../redux/reducers/reducer.example';
import {
  onIncrement,
  actionExample,
} from '../../../redux/actions/actionsExample';

describe('Test example Reducer', () => {
  it('Should retun initial state', () => {
    expect(storeReducer(undefined, {})).toEqual({ count: 0 });
  });
  it('SHould return incremented state', () => {
    expect(
      storeReducer(undefined, { type: ACTION_1, incrementValue: 1 }),
    ).toEqual({
      count: 1,
    });
  });
  it('SHould return', () => {
    expect(storeReducer(undefined, { type: ACTION_TYPE })).toEqual(undefined);
  });
  it('SHould return incremented and type', () => {
    expect(onIncrement()).toEqual({
      type: ACTION_1,
      incrementValue: 1,
    });
    expect(actionExample(null)).toEqual({
      type: ACTION_TYPE,
      action: null,
    });
  });
});
