const API_KEY = "AIzaSyCPsRQ_3cfOEnyUHYEA2OpOvgUrWsKGvSw";
const FIREBASE_AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
export const SIGN_IN = 'signInWithPassword';
export const SIGN_UP = 'signUp';

export const getFirebaseUrl = (method) => (`${FIREBASE_AUTH_URL}${method}?key=${API_KEY}`);
