import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { DismissKeyboardView } from "@/components/DismissKeyboardView";

import { IAuthRoutesParamsList } from "@/routes/auth.routes";
import { LoginForm } from "./components/LoginForm";


export function LoginScreen() {
  const navigation = useNavigation<IAuthRoutesParamsList>()

  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center">
        <LoginForm />
      </View>
    </DismissKeyboardView>
  )
}