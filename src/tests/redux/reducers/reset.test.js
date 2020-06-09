import {
    RESET_ACTION,
    SEND_RESET_EMAIL_ACTION

  } from '../../../redux/actions/actionTypes';
  import { resetReducer } from '../../../redux/reducers/resetReducer';

  const initialState = {
    isPasswordReset:false,
    isResetLinkSent:false
  };

  describe('Test reset Reducer', () => {
    it('Should retun initial state', () => {
      expect(resetReducer(undefined, {})).toEqual(initialState);
    });
    it('It shold return password reset', () => {
      expect(
        resetReducer(undefined, {
          type: RESET_ACTION,
          payload:true
        }),
      ).toEqual({
        isPasswordReset:true,
        isResetLinkSent:false

      });
    });
    it('SHould email reset link', () => {
        expect(
          resetReducer(undefined, {
            type: SEND_RESET_EMAIL_ACTION,
            payload: true,
          }),
        ).toEqual({
            isPasswordReset:false,
           isResetLinkSent:true
        });
      });
  });
