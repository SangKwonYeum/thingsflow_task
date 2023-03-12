import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DetailContainer } from 'components';
import Indicator from 'components/common/indicator/Indicator';
import { useFetch } from 'hooks';
import { DEFAULT_API_ROOT } from 'constants';
import { API_ROOT } from '@env';
import { RootStackParamList } from 'types/screen';
import { Issue } from 'types/issue';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export function Detail({ route, navigation }: Props): JSX.Element {
  const { id } = route.params;
  const apiRoot = API_ROOT || DEFAULT_API_ROOT;

  const { loading, error, data } = useFetch<Issue>({
    url: `${apiRoot}/${id}`,
  });

  useLayoutEffect(() => {
    if (!id) {
      navigation.goBack();
    }
  }, [id, navigation]);

  if (error) {
    navigation.goBack();
  }

  return (
    <>
      {(loading || data === null) && <Indicator />}
      {data !== null && <DetailContainer data={data} />}
    </>
  );
}
