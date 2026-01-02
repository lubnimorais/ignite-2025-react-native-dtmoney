
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { LoginScreen } from '@/app/login';
import { Register } from '@/app/register';

type IAuthRoutesRoutes = {
  login: undefined;
  register: undefined
}

export type IAuthRoutesParamsList = NativeStackNavigationProp<IAuthRoutesRoutes>;

const AuthRoutesStack = createNativeStackNavigator<IAuthRoutesRoutes>()

export function AuthRoutes() {
  return (
    <AuthRoutesStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <AuthRoutesStack.Screen name='login' component={LoginScreen} />

      <AuthRoutesStack.Screen name="register" component={Register} />
    </AuthRoutesStack.Navigator>
  )
}