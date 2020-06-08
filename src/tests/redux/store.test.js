import store from '../../redux/configureStore';

describe('Test store', () => {
  const config = store();
  it('Should return object of state', () => {
    expect(config.length).toBe(undefined);
  });
});
