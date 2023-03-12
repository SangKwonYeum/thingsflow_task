interface Props<T> {
  arr: Array<T>;
}

export function makeUnique<
  T extends {
    id: number;
  },
>({ arr }: Props<T>): Array<T> {
  const set = new Set();

  return arr.filter(item => {
    const { id } = item;
    const isDuplicate = set.has(id);

    set.add(id);

    return !isDuplicate;
  });
}
