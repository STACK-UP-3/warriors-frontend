import httpConfig from '../../helpers/httpHandle';

describe('Test httpConfiguration', () => {
  it('Should return configuration',() => {
    expect(httpConfig());
  });
});
