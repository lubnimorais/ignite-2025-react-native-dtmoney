import { ScrollView, View } from 'react-native';

import { DismissKeyboardView } from '@/components/DismissKeyboardView';

import { RegisterForm } from './components/RegisterForm';
import { AuthHeader } from '@/components/AuthHeader';

export function RegisterScreen() {
  return (
    <DismissKeyboardView>
      {/* <ScrollView> */}
      <View className="w-[82%] flex-1 self-center">
        <AuthHeader />

        <RegisterForm />
      </View>
      {/* </ScrollView> */}
    </DismissKeyboardView>
  );
}
