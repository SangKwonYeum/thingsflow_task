import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { IssueContext } from 'context/IssueProvider';
import * as S from './styles';

interface Props {
  onRoute: ({ id }: { id: string }) => void;
}

export function HomeContainer({ onRoute }: Props): JSX.Element {
  const { data, loading, error, onFetch, page } = useContext(IssueContext);

  const onFetchMore = (): void => {
    onFetch({ page: page + 1 });
  };

  return (
    <S.Container>
      <Text>Home</Text>
      <Button
        title='hello'
        onPress={(): void => {
          onRoute({ id: '1' });
        }}
      />
    </S.Container>
  );
}
