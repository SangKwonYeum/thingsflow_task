import { useCallback, useEffect, useState } from 'react';

interface Props {
  url: string;
}

interface Status<T> {
  loading: boolean;
  error: boolean;
  data: null | T;
}

export function useFetch<T>({ url }: Props): Status<T> {
  const [status, setStatus] = useState<Status<T>>({
    loading: false,
    error: false,
    data: null,
  });

  const fetchData = useCallback(
    async ({ url_ }: { url_: string }): Promise<void> => {
      setStatus({ loading: true, error: false, data: null });
      try {
        const response = await fetch(url_);
        const data = (await response.json()) as T;

        setStatus({ loading: false, error: false, data });
      } catch (error: unknown) {
        setStatus({ loading: false, error: true, data: null });
      }
    },
    [],
  );

  useEffect(() => {
    fetchData({ url_: url }).catch((error: unknown) => {
      console.log('error', error);
    });
  }, [fetchData, url]);

  return status;
}
