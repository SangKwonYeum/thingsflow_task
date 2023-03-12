import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/screen';
import { HomeContainer } from 'components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props): JSX.Element {
  const onRoute = ({ id }: { id: string }): void =>
    navigation.navigate('Detail', { id });

  return <HomeContainer onRoute={onRoute} />;
}
