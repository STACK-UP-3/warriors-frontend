// Sample test file with naming convention: *.test.js

const greetme = 'Welcome! I am a Test file.';
describe('Another sample test!', () => {
  it('Should say hello!', () => {
    expect(greetme).toBe('Welcome! I am a Test file.');
  });
});
