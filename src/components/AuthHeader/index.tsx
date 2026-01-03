import { Image, View } from 'react-native';

import LogoImg from '@/assets/logo.png';

// import { useKeyboardVisible } from '@/hooks/useKeyboardVisible';

export function AuthHeader() {
  // const keyboardVisible = useKeyboardVisible();

  // if (keyboardVisible) return <></>;

  return (
    <View className="w-full min-h-40 items-center justify-center">
      <Image className="w-[255px] h-[48px]" source={LogoImg} />
    </View>
  );
}
