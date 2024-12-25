import { useInfiniteQuery } from "@tanstack/react-query";

import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import useMyLocation from "../common/useMyLocation";
import { useFilterStore } from "@/providers/filter-store-provider";
const useRestaurants = (pageSize = 20) => {
  const { filters, searchTerm } = useFilterStore();
  const position = useMyLocation();
  const result = useInfiniteQuery({
    queryKey: ["restaurants", { ...filters, searchTerm, position }],
    queryFn: ({ pageParam = 1 }) =>
      getRestaurants({ ...filters, searchTerm, position }).then(
        (res) => res.data
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < pageSize) return undefined;
      return allPages.length;
    },
  });
  return result;
};

export default useRestaurants;
