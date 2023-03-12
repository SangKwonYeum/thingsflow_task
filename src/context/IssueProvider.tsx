import React, { createContext, useMemo } from 'react';
import { API_ROOT } from '@env';
import { useInfinitedFetch } from 'hooks';
import { DEFAULT_API_ROOT } from 'constants';
import { Issue } from 'types/issue';
import { Context } from 'types/context';

interface Props {
  children: JSX.Element;
}

// NOTE: 쿼리스트링을 만들어주는 함수
const makeUrlSearchParam = ({
  params,
}: {
  params: Array<Record<string, string | number>>;
}): string => {
  const parsedParams = params
    .map(param => {
      const [p] = Object.entries(param);
      const [key, value] = p;

      return `${String(key)}=${String(value)}`;
    })
    .join('&');

  return `?${parsedParams}`;
};

export const IssueContext = createContext<Context<Issue>>({
  data: null,
  error: null,
  loading: false,
  hasNextPage: true,
  page: 0,
  onFetch: ({ page }: { page: number }): Promise<void> => {
    console.log(page);
    return Promise.resolve();
  },
});

export default function IssueProvider({ children }: Props): JSX.Element {
  const apiRoot = API_ROOT || DEFAULT_API_ROOT;

  const { data, error, loading, page, onFetch, hasNextPage } =
    useInfinitedFetch<Issue>({
      url: `${apiRoot}${makeUrlSearchParam({
        params: [{ per_page: 15 }, { state: 'open' }, { sort: 'comments' }],
      })}`,
    });

  const value = useMemo(
    () => ({
      data,
      error,
      loading,
      hasNextPage,
      page,
      onFetch,
    }),
    [data, error, loading, hasNextPage, page, onFetch],
  );

  return (
    <IssueContext.Provider value={value}>{children}</IssueContext.Provider>
  );
}
