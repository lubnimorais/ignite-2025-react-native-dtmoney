import { StatusBar, View } from 'react-native';

import './src/styles/global.css';

import { Routes } from '@/routes';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </View>
  );
}
