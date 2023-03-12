import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/screen';
import { useFetch } from 'hooks';
import { API_ROOT } from '@env';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props): JSX.Element {
  const onPress = (): void => navigation.navigate('Detail', { id: '1' });

  useFetch({ url: API_ROOT });

  return (
    <View>
      <MaterialIcons name='credit-card' size={16} color='#000' />
      <Text>Home</Text>
      <Button title='hello' onPress={onPress} />
    </View>
  );
}
