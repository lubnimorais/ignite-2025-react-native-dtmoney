import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@/hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.route';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
