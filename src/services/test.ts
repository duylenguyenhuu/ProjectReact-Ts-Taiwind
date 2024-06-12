export const fetchData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return result;
};
