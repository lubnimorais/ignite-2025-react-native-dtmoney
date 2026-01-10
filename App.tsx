import { StatusBar, View } from 'react-native';

import './src/styles/global.css';

import { AuthProvider } from '@/hooks/auth';

import { Routes } from '@/routes';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </View>
  );
}
