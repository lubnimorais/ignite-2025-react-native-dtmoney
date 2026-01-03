import { ReactNode } from 'react';

import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import clsx from 'clsx';
import { colors } from '@/shared/colors';

export type IButtonMode = 'fill' | 'outline';

type IButtonParams = TouchableOpacityProps & {
  mode?: IButtonMode;
  iconName?: keyof typeof MaterialIcons.glyphMap;
};

type IButtonProps = IButtonParams & {
  children: ReactNode;
};

export function Button({
  mode = 'fill',
  iconName,
  children,
  ...rest
}: IButtonProps) {
  const isFill = mode === 'fill';

  return (
    <TouchableOpacity
      className={clsx(
        'w-full h-button flex-row rounded-xl px-5 items-center',
        iconName ? 'justify-between' : 'justify-center',
        {
          'bg-accent-brand': isFill,
          'bg-none border-[1px] border-accent-brand': !isFill,
        }
      )}
      activeOpacity={0.7}
      {...rest}
    >
      <Text
        className={clsx('text-base', {
          'text-white': isFill,
          'text-accent-brand': !isFill,
        })}
      >
        {children}
      </Text>

      {iconName && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={isFill ? colors.white : colors['accent-brand']}
        />
      )}
    </TouchableOpacity>
  );
}
