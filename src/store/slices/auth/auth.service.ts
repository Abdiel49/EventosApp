import { Dispatch } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { ICreateUser, IUser } from "@app/types";
import { authActions } from "./auth.sllice";
import { storeData } from "@app/store/local/local.store";
import { localStorageKeys } from "@app/store/local/localStorageKyes";

export const signUpUser = (userC: ICreateUser) => async (dispatch: Dispatch) => {
  try {
    // Limpiar el estado de autenticación en el store
    dispatch(authActions.clean())
    dispatch(authActions.setIsLoading(true));

    // Crear el usuario con email y contraseña
    const userCredential = await auth().createUserWithEmailAndPassword(
      userC.email,
      userC.password
    );

    const { user } = userCredential;

    const displayName = `${userC.name} ${userC.lastname}`;
    await user.updateProfile({
      displayName,
    });

    // Guardar los datos adicionales del usuario en Realtime Database
    await database()
      .ref(`/users/${user.uid}`)
      .set({
        name: userC.name,
        lastname: userC.lastname,
        displayName,
        phoneNumber: userC.phoneNumber,
        countryCode: userC.countryCode,
        email: userC.email,
    });

    const userCreated: IUser = {
      id: user.uid,
      name: userC.name,
      lastname: userC.lastname,
      displayName,
      email: userC.email,
      phoneNumber: userC.phoneNumber,
      countryCode: userC.countryCode,
    }
    await storeData(localStorageKeys.IS_AUTH, "true")
    await storeData(localStorageKeys.USER, JSON.stringify(userCreated))

    // Actualizar el estado del usuario en el store
    dispatch(authActions.setUser(userCreated));
    
    dispatch(authActions.setIsLoading(false));

    // Actualizar el estado de autenticación en el store
    dispatch(authActions.setIsAuth(true));
  } catch (error) {
    console.error('Error creando el usuario:', JSON.stringify(error));
    dispatch(authActions.setIsLoading(false));
    dispatch(authActions.setError(JSON.stringify(error)));
    dispatch(authActions.setIsAuth(false));
  }
}

export const signInUser = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    // Limpiar el estado de autenticación en el store
    dispatch(authActions.clean());
    dispatch(authActions.setIsLoading(true));

    // Iniciar sesión con email y contraseña
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const { user } = userCredential;

    const userFound: IUser = {
      id: user.uid,
      name: '',
      lastname: '',
      displayName: '',
      email: user.email || '',
      phoneNumber: '',
      countryCode: '',
    }
    // Obtener los datos adicionales del usuario desde Realtime Database
    await database()
     .ref(`/users/${user.uid}`)
     .once('value')
     .then((snapshot) => {
        const userData = snapshot.val();

        userFound.name = userData?.name || '';
        userFound.lastname = userData?.lastname || '';
        userFound.phoneNumber = userData?.phoneNumber || '';
        userFound.countryCode = userData?.countryCode || '';
        userFound.email = userData?.email || '';
        userFound.displayName = userData?.displayName || '';
      });

    // Actualizar el estado del usuario en el store
    dispatch(authActions.setUser(userFound));
    
    dispatch(authActions.setIsLoading(false));

    // Actualizar el estado de autenticación en el store
    dispatch(authActions.setIsAuth(true));
  } catch (error) {
    console.error('Error iniciando sesión:', JSON.stringify(error));
    dispatch(authActions.setError(JSON.stringify(error)));  
    dispatch(authActions.setIsLoading(false));
  }; 
}

