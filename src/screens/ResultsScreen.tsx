import type { ReactElement } from "react";
import { View, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Routes } from "../types";
import { permissionStyles as styles } from "../styles";

type Props = NativeStackScreenProps<Routes, "ResultsScreen">;

const ResultsScreen = ({ route }: Props): ReactElement => {
  const { params } = route;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{JSON.stringify(params)}</Text>
    </View>
  );
};

export { ResultsScreen };
