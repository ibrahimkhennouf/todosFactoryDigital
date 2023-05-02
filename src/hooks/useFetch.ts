import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useFetch(url: string) {
  let fetch = async () => {
    const data = await axios.get(url).then((res) => res.data);

    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todosList"],
    queryFn: async () => {
      return await fetch();
    },
  });

  return { data, isError, isLoading };
}
