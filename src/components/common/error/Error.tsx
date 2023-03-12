import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './Error.styles';

interface Props {
  status: number;
  message?: string;
}

export default function Error({ status, message }: Props): JSX.Element {
  const getMessageText = (): string => {
    if (status === 403) {
      return 'API rate limit exceeded';
    }

    if (message) {
      return message;
    }

    return 'Something went wrong';
  };

  return (
    <S.Container>
      <MaterialIcons name='error' size={100} color='#FF6666' />
      <S.Text>{getMessageText()}</S.Text>
    </S.Container>
  );
}

Error.defaultProps = {
  message: '',
};
