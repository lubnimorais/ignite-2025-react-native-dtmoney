import { ReactNode } from 'react';

import { Text, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/shared/colors';

type IErrorMessageProps = {
  children: ReactNode;
};

export function ErrorMessage({ children }: IErrorMessageProps) {
  return (
    <View className="flex-row items-center mt-1">
      <MaterialIcons
        className="mr-1"
        name="error-outline"
        size={16}
        color={colors['accent-red-background-primary']}
      />

      <Text className="text-accent-red-background-primary">{children}</Text>
    </View>
  );
}
