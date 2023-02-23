import { useCallback, useReducer } from 'react';
import { useEffect } from 'react';

const initialState = {
  loading: false,
  data: null,
  error: false,
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, data: null, error: null };
    case 'SUCCESS':
      const { data } = action;

      return { loading: false, data, error: null };
    case 'ERROR':
      const { error } = action;

      return { loading: false, data: null, error };
    case 'CLEAR':
      return initialState;
    default:
      throw new Error(`알 수 없는 액션 타입입니다.`);
  }
};

const useApi = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const callApi = useCallback(
    async (...args) => {
      dispatch({ type: 'LOADING' });

      try {
        const { data } = await callback(...args);

        dispatch({ type: 'SUCCESS', data });

        return true;
      } catch (error) {
        dispatch({ type: 'ERROR', error });
      }
    },
    [callback]
  );

  useEffect(() => {
    if (skip) return;
    callApi();

    return () => dispatch({ type: 'CLEAR' });
  }, deps);

  return [state, callApi];
};

export default useApi;
