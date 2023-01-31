import { useGetCategoryQuery } from "../categoryApiSlice";
import Card from "../../components/Card";

function Tech() {
  const { data } = useGetCategoryQuery("Technology");
  return (
    <>
      {data?.map((blog) => {
        return <Card blog={blog} key={blog?._id} />;
      })}
    </>
  );
}

export default Tech;
