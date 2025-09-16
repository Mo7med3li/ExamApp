import { useQuery } from "@tanstack/react-query";
import { fetchSubjects } from "../_apis/subject.api";

export default function UseSubjects() {
  const {
    isLoading,
    error,
    data: payload,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: fetchSubjects,
  });

  return {
    isLoading,
    error,
    payload,
  };
}

// import { useInfiniteQuery } from "@tanstack/react-query";
// import { fetchSubjects } from "../_apis/subject.api";

// export default function useFetchDiplomas() {
//   const {
//     data: payload,
//     isLoading,
//     isFetchingNextPage,
//     hasNextPage,
//     fetchNextPage,
//   } = useInfiniteQuery({
//     queryKey: ["diplomas"],
//     queryFn: async ({ pageParam }) => {
//       return await fetchSubjects({ pageParam });
//     },
//     initialPageParam: 1,
//     getNextPageParam: (lastPage) => {
//       const { currentPage, numberOfPages } = lastPage.metadata;
//       if (currentPage >= numberOfPages) return undefined;
//       return currentPage + 1;
//     },
//   });

//   return {
//     payload,
//     isLoading,
//     isFetchingNextPage,
//     hasNextPage,
//     fetchNextPage,
//   };
// }
