import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/screen';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export function Detail({ route }: Props): JSX.Element {
  console.log(route.params.id);

  return (
    <View>
      <Text>Dail</Text>
    </View>
  );
}
