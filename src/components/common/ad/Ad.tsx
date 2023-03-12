import React from 'react';
import { Linking } from 'react-native';
import * as S from './Ad.styles';

export default function Ad(): JSX.Element {
  const url =
    'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7';

  const onPress = (): void => {
    Linking.openURL('https://thingsflow.com/ko/home');
  };

  return (
    <S.Container onPress={onPress}>
      <S.Logo
        source={{
          uri: url,
        }}
      />
    </S.Container>
  );
}
