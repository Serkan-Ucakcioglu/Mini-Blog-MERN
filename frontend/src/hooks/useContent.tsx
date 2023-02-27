import Card, { DataFace } from "../components/Card";
import { useGetCategoryQuery } from "../features/categoryApiSlice";

function useContent(endpoint: string) {
  const { data } = useGetCategoryQuery(endpoint);
  const content: JSX.Element = data?.map((blog: DataFace) => (
    <Card blog={blog} key={blog?._id} />
  ));

  return content;
}

export default useContent;
