import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DetailContainer } from 'components';
import Error from 'components/common/error/Error';
import Indicator from 'components/common/indicator/Indicator';
import { useFetch } from 'hooks';
import { DEFAULT_API_ROOT } from 'constants';
import { API_ROOT } from '@env';
import { RootStackParamList } from 'types/screen';
import { Issue } from 'types/issue';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export function Detail({ route }: Props): JSX.Element {
  const { id } = route.params;
  const apiRoot = API_ROOT || DEFAULT_API_ROOT;

  const { loading, error, data } = useFetch<Issue>({
    url: `${apiRoot}/${id}`,
  });

  if (error || !id) {
    return <Error status={400} />;
  }

  return (
    <>
      {(loading || data === null) && <Indicator />}
      {data !== null && <DetailContainer data={data} />}
    </>
  );
}
