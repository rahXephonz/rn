import {Stack} from "expo-router";

import {Home as HomeScreen} from "~/screens";

const Home = () => (
  <>
    <Stack.Screen options={{title: "My home"}} />
    <HomeScreen />
  </>
);

export default Home;
