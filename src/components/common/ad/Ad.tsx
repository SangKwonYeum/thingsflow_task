import React from 'react';
import { Linking } from 'react-native';
import { AD_IMAGE_URL, AD_LINK_URL } from 'constants';
import * as S from './Ad.styles';

export default function Ad(): JSX.Element {
  const onPress = (): void => {
    Linking.openURL(AD_LINK_URL);
  };

  return (
    <S.Container onPress={onPress}>
      <S.Logo
        source={{
          uri: AD_IMAGE_URL,
        }}
      />
    </S.Container>
  );
}
