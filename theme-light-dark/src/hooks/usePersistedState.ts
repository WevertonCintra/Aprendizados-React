import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const Identify = '@Theme-';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const prefixedKey = Identify + key;

  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(prefixedKey);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(state));
  }, [prefixedKey, state]);

  return [state, setState];
}

export default usePersistedState;