import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './Indicator.styles';

export default function Indicator(): JSX.Element {
  return (
    <S.Container>
      <ActivityIndicator size='large' />
    </S.Container>
  );
}
