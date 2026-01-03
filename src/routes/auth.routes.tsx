import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { LoginScreen } from '@/app/login';
import { RegisterScreen } from '@/app/register';

type IAuthRoutesRoutes = {
  loginScreen: undefined;
  registerScreen: undefined;
};

export type IAuthRoutesParamsList =
  NativeStackNavigationProp<IAuthRoutesRoutes>;

const AuthRoutesStack = createNativeStackNavigator<IAuthRoutesRoutes>();

export function AuthRoutes() {
  return (
    <AuthRoutesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthRoutesStack.Screen name="loginScreen" component={LoginScreen} />

      <AuthRoutesStack.Screen
        name="registerScreen"
        component={RegisterScreen}
      />
    </AuthRoutesStack.Navigator>
  );
}
