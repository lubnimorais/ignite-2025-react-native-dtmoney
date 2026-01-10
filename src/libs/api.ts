// import { Platform } from 'react-native';

import axios from 'axios';

// UMA FORMA DE RODAR PELO EMULADOR EM MODO DE DESENVOLVIMENTO
// const baseURL = Platform.select({
//   ios: 'http://localhost:3333',
//   android: 'http://10.0.2.2:3333', // IP ESPECIAL CRIADO PELO EMULADOR
// });

export const api = axios.create({
  baseURL: 'http://192.168.100.8:3333',
});
