import { ReactNode } from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

type IDismissKeyboardViewProps = {
  children: ReactNode;
};

export function DismissKeyboardView({ children }: IDismissKeyboardViewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding" className="flex-1">
            {children}
          </KeyboardAvoidingView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
