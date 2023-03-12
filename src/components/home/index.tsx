import React, { useContext, useState, useCallback } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { IssueContext } from 'context/IssueProvider';
import * as S from './styles';

interface Props {
  onRoute: ({ id }: { id: string }) => void;
}

export function HomeContainer({ onRoute }: Props): JSX.Element {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { data, loading, error, onFetch, page, hasNextPage } =
    useContext(IssueContext);

  const onFetchMore = (): void => {
    onFetch({ page: page + 1 });
  };

  const onRefresh = useCallback((): void => {
    // NOTE: Refreshing..
    setRefreshing(true);

    onFetch({ page: 1, needRefresh: true });

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [onFetch]);

  return (
    <>
      <S.Container>
        <FlashList
          scrollEnabled={loading || !refreshing}
          scrollEventThrottle={100}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          estimatedItemSize={120}
          renderItem={({ item }): JSX.Element => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          onEndReached={(): void => {
            if (hasNextPage) {
              onFetchMore();
            }
          }}
          onEndReachedThreshold={0.5}
        />
      </S.Container>
      {loading && hasNextPage && !refreshing ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : null}
    </>
  );
}
