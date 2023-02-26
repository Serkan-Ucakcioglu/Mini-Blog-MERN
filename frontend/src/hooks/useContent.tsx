import Card from "../components/Card";
import { useGetCategoryQuery } from "../features/categoryApiSlice";

export interface DataFace {
  category: String;
  description: String;
  title: String;
  url: String;
  _id: String;
}

function useContent(endpoint: string) {
  const { data } = useGetCategoryQuery<DataFace[]>(endpoint);
  const content = data?.map((blog: any) => {
    return <Card blog={blog} key={blog?._id} />;
  });

  return content;
}

export default useContent;
