import { StatusBar } from 'react-native';
import './src/styles/global.css';

import { Routes } from '@/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent  />

      <Routes />
    </>
  );
}
