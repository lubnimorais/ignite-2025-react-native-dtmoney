import { IAuthRoutesParamsList } from "@/routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, TouchableOpacity, View } from "react-native";

export function LoginScreen() {
  const navigation = useNavigation<IAuthRoutesParamsList>()

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Tela de login</Text>

      <TouchableOpacity 
        className="bg-blue-500 mt-3 p-4"
        activeOpacity={0.7} 
        onPress={() => navigation.navigate('register')}
      >
        <Text className="text-white text-md">Cadastro</Text>
      </TouchableOpacity>
    </View>
  )
}