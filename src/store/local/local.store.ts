import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keys, localStorageKeys } from './localStorageKyes';

export const storeData = async (key: Keys, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {

  }
};

export const getData = async (key: Keys) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
    throw new Error('Invalid key: ' + key);
    // return null;
  } catch (e) {
    // error reading value
  }
};
