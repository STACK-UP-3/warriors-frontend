// Sample test file with naming convention: *.spec.js

const greetme = 'Hello, world! I am a Spec file.';
describe('Our first test!', () => {
  it('Should say hello!', () => {
    expect(greetme).toBe('Hello, world! I am a Spec file.');
  });
});
