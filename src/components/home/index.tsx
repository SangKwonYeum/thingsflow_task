import React, { useContext, useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Ad from 'components/common/ad/Ad';
import Card from 'components/home/card/Card';
import Indicator from 'components/common/indicator/Indicator';
import { IssueContext } from 'context/IssueProvider';
import * as S from './styles';

interface Props {
  onRoute: ({ id }: { id: string }) => void;
}

export function HomeContainer({ onRoute }: Props): JSX.Element {
  const adPosition = 5;
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
          keyExtractor={(item): string => String(item.id)}
          renderItem={({ item, index }): JSX.Element => (
            <>
              <Card
                issue={item}
                onRoute={(): void => onRoute({ id: String(item.number) })}
              />
              {index === adPosition - 1 ? <Ad /> : null}
            </>
          )}
          onEndReached={(): void => {
            if (hasNextPage) {
              onFetchMore();
            }
          }}
          onEndReachedThreshold={0.5}
        />
      </S.Container>
      {loading && hasNextPage && !refreshing ? <Indicator /> : null}
    </>
  );
}
