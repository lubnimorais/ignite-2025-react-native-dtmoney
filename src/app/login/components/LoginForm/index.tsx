import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { IAuthRoutesParamsList } from '@/routes/auth.routes';

import { schema } from './schema';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

type ILoginFormParams = {
  email: string;
  password: string;
};

export function LoginForm() {
  const navigation = useNavigation<IAuthRoutesParamsList>();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ILoginFormParams>({
    resolver: zodResolver(schema),
  });

  async function handleSubmitLogin(data: ILoginFormParams) {
    console.log(data);
  }

  function handleRegister() {
    reset();
    navigation.navigate('registerScreen');
  }

  return (
    <View>
      <Input
        control={control}
        name="email"
        label="E-MAIL"
        placeholder="mail@example.com"
        leftIconName="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input
        control={control}
        name="password"
        label="SENHA"
        placeholder="Sua senha"
        leftIconName="lock-outline"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View className="min-h-[250px] flex-1 justify-between mt-8 mb-6">
        <Button
          iconName="arrow-forward"
          onPress={handleSubmit(handleSubmitLogin)}
        >
          Login
        </Button>

        <View>
          <Text className="text-base text-gray-300 mb-6">
            Ainda não possui uma conta?
          </Text>

          <Button
            mode="outline"
            iconName="arrow-forward"
            onPress={() => handleRegister()}
          >
            Cadastrar
          </Button>
        </View>
      </View>
    </View>
  );
}
