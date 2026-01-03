import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

import { IAuthRoutesParamsList } from '@/routes/auth.routes';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

type IRegisterFormParams = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export function RegisterForm() {
  const navigation = useNavigation<IAuthRoutesParamsList>();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IRegisterFormParams>();

  return (
    <View>
      <Input
        control={control}
        name="name"
        label="NOME"
        placeholder="Seu nome"
        leftIconName="person"
        secureTextEntry
      />

      <Input
        control={control}
        name="email"
        label="E-MAIL"
        placeholder="mail@example.com"
        leftIconName="mail-outline"
      />

      <Input
        control={control}
        name="password"
        label="SENHA"
        placeholder="Sua senha"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <Input
        control={control}
        name="confirmPassword"
        label="CONFIRMAR SENHA"
        placeholder="Confirme sua senha"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <View className="min-h-[250px] flex-1 justify-between mt-8 mb-6">
        <Button iconName="arrow-forward">Cadastrar</Button>

        <View>
          <Text className="text-base text-gray-300 mb-6">
            Já possui uma conta?
          </Text>

          <Button
            mode="outline"
            iconName="arrow-forward"
            onPress={() => navigation.navigate('loginScreen')}
          >
            Acessar
          </Button>
        </View>
      </View>
    </View>
  );
}
