export const localStorageKeys = {
  IS_AUTH: 'IS_AUTH',
  USER: 'USER',
  TEST: "THIS IS TEST"
}

export enum EKeys {
  'IS_AUTH',
  'USER',
  'TEST_TEST',
  'MORE_DATA',
};

export type Keys = keyof typeof EKeys;

