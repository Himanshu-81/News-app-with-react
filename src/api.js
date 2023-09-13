const apiKey = "16911bf2bdfd4732b9126e53f023a28a";
  const pageSize = 6;

const BASE_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${pageNumber}&pageSize=${pageSize}`;

export async function fetchData(endpoint) {
 const {
    data: newsData,
    isLoading,
    isError,
  } = useQuery(
    ["news", pageNumber],
    async () => {
      const response = await axios.get(BASE_URL);
      setTotalResults(endpoint);
      return response.data.articles;
    },
    {
      retry: 3,
    }
  );
}
