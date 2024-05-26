import {useAtom} from "jotai";
import {Button, Text} from "react-native";

import {homeStateAtom} from "~/state/home";

export const Home = () => {
  const [atomHome, setAtomHome] = useAtom(homeStateAtom);

  return (
    <>
      <Button title="Change Atom" onPress={() => setAtomHome("Changed")} />
      <Text>{atomHome}</Text>
    </>
  );
};
