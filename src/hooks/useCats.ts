import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) =>
  axios.get(url).then(res => `https://cataas.com/cat/${res.data._id}`);

export function useCats() {
  const { data, isLoading, isValidating, mutate } = useSWR<string>(
    'https://cataas.com/cat?json=true',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenHidden: false,
      refreshWhenOffline: false
    }
  );

  return {
    cat: data,
    isLoading: isLoading || isValidating,
    newCat: () => mutate()
  };
}
