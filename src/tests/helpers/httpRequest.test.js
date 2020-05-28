import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
// ~https://www.reactnativeschool.com/mocking-fetch-api-calls-when-using-jest

import * as httpRequest from '../../helpers/httpRequest';

describe('Testing the HTTP Request helper functions', () => {
  describe('GET request to /roles on API server', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should return a collection of Roles', () => {
      fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
      const onResponse = jest.fn();
      const onError = jest.fn();

      return httpRequest
        .getResource('https://warriorz-staging.herokuapp.com/api/v1/roles')
        .then(onResponse)
        .catch(onError)
        .finally(() => {
          expect(onResponse).toHaveBeenCalled();
          expect(onError).not.toHaveBeenCalled();

          expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
        });
    });
  });

  describe('POST request to /roles on API server', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should successfully create a new Role, and return the created Role', () => {
      fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
      const onResponse = jest.fn();
      const onError = jest.fn();

      return httpRequest
        .postResource('https://warriorz-staging.herokuapp.com/api/v1/roles', {
          name: 'Example Role',
          permissions: 'example-permission',
        })
        .then(onResponse)
        .catch(onError)
        .finally(() => {
          expect(onResponse).toHaveBeenCalled();
          expect(onError).not.toHaveBeenCalled();

          expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
        });
    });
  });

  describe('PATCH request to /roles/{id} on API server', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should successfully create a new Role, and return the created Role', () => {
      fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
      const onResponse = jest.fn();
      const onError = jest.fn();

      return httpRequest
        .patchResource(
          'https://warriorz-staging.herokuapp.com/api/v1/roles/1',
          {
            name: 'Updated Role',
          },
        )
        .then(onResponse)
        .catch(onError)
        .finally(() => {
          expect(onResponse).toHaveBeenCalled();
          expect(onError).not.toHaveBeenCalled();

          expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
        });
    });
  });

  describe('DELETE request to /roles/{id} on API server', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should successfully create a new Role, and return the created Role', () => {
      fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
      const onResponse = jest.fn();
      const onError = jest.fn();

      return httpRequest
        .deleteResource('https://warriorz-staging.herokuapp.com/api/v1/roles/1')
        .then(onResponse)
        .catch(onError)
        .finally(() => {
          expect(onResponse).toHaveBeenCalled();
          expect(onError).not.toHaveBeenCalled();

          expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
        });
    });
  });
});
