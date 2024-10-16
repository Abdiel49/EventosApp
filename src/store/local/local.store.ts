import AsyncStorage from '@react-native-async-storage/async-storage';
import { localStorageKeys } from './localStorageKyes';

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {

  }
};

const getData = async (key: string) => {
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

const data = {
  name: 'abdiel',
  age: 30,
  email: 'abdiel@example.com',
}


storeData(localStorageKeys.USER_UUID, JSON.stringify(data))