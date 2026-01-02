import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HomeScreen } from "@/app/home";

type IAppRoutes = {
  home: undefined;
}

export type IAppRoutesParamsList = NativeStackNavigationProp<IAppRoutes>;

const AppRoutesStack = createNativeStackNavigator<IAppRoutes>()

export function AppRoutes() {
  return (
    <AppRoutesStack.Navigator>
      <AppRoutesStack.Screen name="home" component={HomeScreen} />
    </AppRoutesStack.Navigator>
  )

}