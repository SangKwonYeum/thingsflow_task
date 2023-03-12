import { useState, useEffect } from 'react';
import { TOKEN } from '@env';

interface Props {
  url: string;
}

interface Status<T> {
  loading: boolean;
  error: boolean;
  data: null | T;
}

type Option =
  | {
      Authorization: string;
      ContentType: string;
    }
  | {
      ContentType: string;
    };

export function useFetch<T>({ url }: Props): Status<T> {
  const [status, setStatus] = useState<Status<T>>({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const headerOption: Option = TOKEN
        ? {
            Authorization: `token ${TOKEN}`,
            ContentType: 'application/json',
          }
        : {
            ContentType: 'application/json',
          };

      setStatus(prevStatus => ({
        ...prevStatus,
        loading: true,
      }));

      try {
        const response = await fetch(url, {
          headers: {
            ...headerOption,
          },
        });
        const data = (await response.json()) as T;

        setStatus(prevStatus => ({
          ...prevStatus,
          data,
        }));
      } catch (error) {
        setStatus(prevStatus => ({
          ...prevStatus,
          error: true,
        }));
      } finally {
        setStatus(prevStatus => ({
          ...prevStatus,
          loading: false,
        }));
      }
    };

    fetchData();
  }, [url]);

  return status;
}
