import {createNativeStackNavigator} from "@react-navigation/native-stack";

import * as Screen from "~/screens";

const Stack = createNativeStackNavigator();

export const HomeStackGroup = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Screen.Home} />
    </Stack.Navigator>
  );
};

export const AuthStackGroup = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Screen.Signin} />
      <Stack.Screen name="Signup" component={Screen.Signup} />
    </Stack.Navigator>
  );
};
