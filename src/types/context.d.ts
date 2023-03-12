export interface Context<T> {
  data: Array<T> | null;
  error: null | {
    status: number;
    message: string;
  };
  hasNextPage: boolean;
  loading: boolean;
  page: number;
  onFetch: ({
    page,
    needRefresh = false,
  }: {
    page: number;
    needRefresh?: boolean;
  }) => Promise<void>;
}
