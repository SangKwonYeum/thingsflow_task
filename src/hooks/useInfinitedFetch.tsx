import { useCallback, useState } from 'react';
import { TOKEN } from '@env';

interface Props {
  url: string;
}

interface Error {
  status: number;
  code: string;
  message: string;
}

interface Status<T> {
  page: number;
  hasNextPage: boolean;
  loading: boolean;
  error: null | {
    status: number;
    message: string;
  };
  data: null | Array<T>;
}

type Option =
  | {
      Authorization: string;
      ContentType: string;
    }
  | {
      ContentType: string;
    };

export function useInfinitedFetch<T>({ url }: Props): Status<T> & {
  onFetch: ({ page }: { page: number }) => Promise<void>;
} {
  const [status, setStatus] = useState<Status<T>>({
    page: 0,
    hasNextPage: true,
    loading: false,
    error: null,
    data: null,
  });

  // NOTE: 무한 스크롤을 위한 fetch 함수
  const onFetch = useCallback(
    async ({ page }: { page: number }): Promise<void> => {
      // NOTE: Loading..
      setStatus(prevStatus => ({
        ...prevStatus,
        loading: true,
      }));

      // NOTE: 토큰 유무에 따라 헤더 옵션을 다르게 설정
      const headerOption: Option = TOKEN
        ? {
            Authorization: `token ${TOKEN}`,
            ContentType: 'application/json',
          }
        : {
            ContentType: 'application/json',
          };

      try {
        // NOTE: fetch
        const response = await fetch(`${url}&page=${page}`, {
          headers: {
            ...headerOption,
          },
        });
        const data = (await response.json()) as Array<T>;

        setStatus(prevStatus => ({
          ...prevStatus,
          page,
          data: prevStatus.data ? [...prevStatus.data, ...data] : data,
          hasNextPage: data.length > 0,
        }));
      } catch (error: unknown) {
        const { status: statusCode, message } = error as Error;

        setStatus(prevStatus => ({
          ...prevStatus,
          error: {
            status: statusCode || 500,
            message: message || 'Something went wrong',
          },
        }));
      } finally {
        setStatus(prevStatus => ({
          ...prevStatus,
          loading: false,
        }));
      }
    },
    [url],
  );

  return {
    hasNextPage: status.hasNextPage,
    data: status.data,
    error: status.error,
    loading: status.loading,
    page: status.page,
    onFetch,
  };
}
