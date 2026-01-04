import { useRef, useState } from 'react';

import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import clsx from 'clsx';

import { colors } from '@/shared/colors';
import { ErrorMessage } from '../ErrorMessage';

type IInputProps<T extends FieldValues> = TextInputProps & {
  control: Control<T>;
  name: Path<T>; // nome da propriedade que queremos controlar dentro do input
  label?: string;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
};

export function Input<T extends FieldValues>({
  control,
  name,
  label,
  leftIconName,
  secureTextEntry,
  ...rest
}: IInputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const [showText, setShowText] = useState(secureTextEntry);

  const inputRef = useRef<TextInput>(null);

  // SE TIVER O CAMPO PREENCHIDO
  // function checkFocus(value: string) {
  //   if (inputRef.current) {
  //     setIsFocused(inputRef.current.isFocused() || value !== '');
  //   }
  // }

  function checkFocus() {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused());
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View className="w-full mt-4">
          {label && (
            <Text
              className={clsx(
                'text-base mt-3 mb-2',
                isFocused ? 'text-accent-brand' : 'text-gray-600'
              )}
            >
              {label}
            </Text>
          )}

          <View
            className="
            h-16 flex-row items-center justify-between border-b-[1px] border-gray-600 px-3 py-2"
          >
            {leftIconName && (
              <MaterialIcons
                className="mr-2"
                name={leftIconName}
                size={24}
                color={isFocused ? colors['accent-brand'] : colors.gray[600]}
              />
            )}

            <TextInput
              ref={inputRef}
              className="flex-1 text-base text-gray-500"
              placeholderTextColor={colors.gray[700]}
              secureTextEntry={showText}
              value={value}
              onChangeText={onChange}
              onFocus={checkFocus}
              onEndEditing={checkFocus}
              {...rest}
            />

            {secureTextEntry && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowText((oldState) => !oldState)}
              >
                <MaterialIcons
                  name={showText ? 'visibility' : 'visibility-off'}
                  color={colors.gray[600]}
                  size={24}
                />
              </TouchableOpacity>
            )}
          </View>

          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </View>
      )}
    />
  );
}
